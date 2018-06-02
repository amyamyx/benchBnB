class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { "errors": {"session": ["invalid credentails"]}}, 
             status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: { "errors": { "session": ["404 Not Found"]}},
             status: 404
    end
  end
end
