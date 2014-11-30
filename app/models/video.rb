class Video < ActiveRecord::Base
  # 指定したカラムでソートし、順位付でレコードを取得します。
  def self.allWithOrderRank(order_item = "created_at")
    query = StringIO.new
    query << "*"
    query << ", 0 AS rank"
    query << ", to_char(created_at + '9 hours', 'YYYY-MM-DD HH24:MI') AS formated_created_at"
    query << ", to_char(views, '9,999') AS formated_views"
    query << ", substr(description_ja, 0, 50) || '…' AS short_description_ja"

    videos = Video
      .select(query.string)
      .order(order_item + " DESC")
    rank = 0
    videos.each do |video|
      rank += 10
      video.rank = rank
    end

    return videos
  end

  # 情報を付加して対象のレコードを１件取得します。
  def self.findWithAdditionalInformation(id)
    query = StringIO.new
    query << "*"
    query << ", to_char(created_at + '9 hours', 'YYYY-MM-DD HH24:MI') AS formated_created_at"
    query << ", to_char(views, '9,999') AS formated_views"
    query << ", substr(description_ja, 0, 50) || '…' AS short_description_ja"

    # 配列の0番目を明示的に指定
    # （じゃないと、1件でも配列で返してしまう。）
    return Video
      .select(query.string)
      .where(id: id)[0]
  end
end
