FactoryGirl.define do
  factory :video do
    title_ja "トウモロコシ早食いの裏技をあみだした男"
    title_en "Epic Win Corn Eating Speed Record"
    description_ja "男が手にしているのはトウモロコシとドリル。"
    description_en "test description_en."
    thumbnail_path "morokoshi.png"
    video_id "tQualAPjWS0"
    views 0

    factory :littleViews do
      views 100
    end

    factory :mostViews do
      views 9999999
    end

    factory :manyViews do
      views 10000
    end
  end
end
