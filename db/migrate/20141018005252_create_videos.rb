class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title_ja  #日本語タイトル
      t.string :title_en  #英語タイトル
      t.string :description_ja  #日本語説明文
      t.string :description_en  #英語説明文
      t.string :thumbnail_path  #サムネイルファイルパス
      t.string :video_url #動画URL
      t.timestamps
    end
  end
end
