class Api::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:session][:email])
    if user.valid_password?(params[:session][:password])
      render json: { user: user }, status: :ok
    else
      render json: { error: 'メールアドレスまたはパスワードが正しくありません' }, status: :unauthorized
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: 'ログアウトしました'
  end
end
