class Api::CorporationsController < ApplicationController
  def index
    corporations = Corporation.all
    render json: { status: 'SUCCESS', message: 'Loaded corporations', data: corporations }
  end

  def create
    corporation = Corporation.new(corporation_params)
    if corporation.save
      render json: { data: corporation }, status: :created
    else
      render json: { error: corporation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    corporation = Corporation.find(params[:id])
    corporation.destroy
    render json: { message: 'Corporation deleted successfully' }, status: :ok
  end

  def search
    search_type = params[:searchType]
    query = params[:query].split(/[[:blank:]]+/) || []
    columns = {
      'code' => :code,
      'status' => :status,
      'name' => :name,
      'name_kana' => :name_kana,
      'postal_code' => :postal_code,
      'address' => :address,
      'representative_name' => :representative_name,
      'representative_name_kana' => :representative_name_kana,
      'phone' => :phone,
      'sales_2022' => :sales_2022,
      'profit_2022' => :profit_2022,
      'sales_2021' => :sales_2021,
      'profit_2021' => :profit_2021,
      'sales_2020' => :sales_2020,
      'profit_2020' => :profit_2020
    }
    corporations = Corporation.none
    if search_type == 'AND'
      query.each_with_index do |keyword, i|
        corporations = Corporation.search(keyword) if i == 0
        corporations =corporations.merge(Corporation.search(keyword))
      end      
    else
      query.each do |keyword|
        corporations = corporations.or(Corporation.search(keyword))
      end
    end
    render json: { data: corporations }
  end
  
  

  private

  def corporation_params
    params.require(:corporation).permit(:code, :status, :name, :name_kana, :postal_code, :address, :representative_name, :representative_name_kana, :phone, :sales_2022, :profit_2022, :sales_2021, :profit_2021, :sales_2020, :profit_2020)
  end

end
