describe 'GET /api/v1/video/:id', :type => :request do
  before do
    @video = FactoryGirl.create(:video)
    get "/api/v1/video/#{@video.id}"
  end

  it '200 OK が返ってくる' do
    expect(response).to be_success
    expect(response.status).to eq(200)
  end

  it '動画情報を取得できる' do
    json = JSON.parse(response.body)
    expect(json['title_ja']).to eq(@video.title_ja)
  end
end

describe 'GET /api/v1/video/sort/views', :type => :request do
  before do
    @expected = {}
    @expected[:littleViews] = FactoryGirl.create(:littleViews)
    @expected[:mostViews] = FactoryGirl.create(:mostViews)
    @expected[:manyViews] = FactoryGirl.create(:manyViews)
    get "/api/v1/video/sort/views"
  end

  it '200 OK が返ってくる' do
    expect(response).to be_success
    expect(response.status).to eq(200)
  end

  it '動画が再生順（降順）で取得できる' do
    actual = JSON.parse(response.body)
    expect(actual[0]['views']).to eq(@expected[:mostViews].views)
    expect(actual[1]['views']).to eq(@expected[:manyViews].views)
    expect(actual[2]['views']).to eq(@expected[:littleViews].views)
  end
end

describe 'POST /api/v1/video/views/:id' do
  before do
    @video = FactoryGirl.create(:video)
    post "/api/v1/video/views/#{@video.id}"
    @updatedVideo = Video.find(@video.id)
  end

  it '再生回数が１増加している' do
    expect(@updatedVideo.views).to eq(@video.views + 1)
  end
end
