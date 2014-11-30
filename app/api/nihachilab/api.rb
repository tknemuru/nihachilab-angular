# coding: utf-8

module Nihachilab
  class API < Grape::API
    version 'v1', using: :path, vendor: 'nihachilab'
    format :json
    prefix 'api'

    resource :video do
      before do
        header "Access-Control-Allow-Origin", "*"
      end

      get do
        Video.allWithOrderRank()
      end

      get "sort/views" do
        Video.allWithOrderRank("views")
      end

      get "sort/createat" do
        Video.allWithOrderRank()
      end

      post "/views/:id" do
        video = Video.find(params[:id])
        video.views += 1
        video.save
      end

      params do
        requires :id, type: Integer
      end

      route_param :id do
        get do
          Video.findWithAdditionalInformation(params[:id])
        end
      end
    end
  end
end
