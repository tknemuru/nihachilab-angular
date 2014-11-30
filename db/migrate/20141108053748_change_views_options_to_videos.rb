class ChangeViewsOptionsToVideos < ActiveRecord::Migration
  def change
    change_column :videos, :views, :integer, null: false, default: 0
  end
end
