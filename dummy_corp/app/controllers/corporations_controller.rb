class CorporationsController < ApplicationController
    def index
      corporations = Corporation.all
      render json: { status: 'SUCCESS', message: 'Loaded corporations', data: corporations }
    end

  end