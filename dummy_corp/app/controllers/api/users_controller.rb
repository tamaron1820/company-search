module Api
    class UsersController < ApplicationController
      def create
        user = User.new(user_params)
        if user.save
          render json: { status: 'SUCCESS', message: 'User created successfully', data: user }, status: :ok
        else
          render json: { status: 'ERROR', message: 'User not saved', data: user.errors }, status: :unprocessable_entity
        end
      end
  
      private
  
      def user_params
        params.require(:user).permit(:email, :password, :role)
      end
    end
  end
  