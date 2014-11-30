class ModifyVideos < ActiveRecord::Migration
  def change
    rename_column :videos, :video_url, :video_id
  end
end
