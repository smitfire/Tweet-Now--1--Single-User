get '/' do
  # Look in app/views/index.erb

  erb :index
end

post '/tweet' do
  tweet = Twitter.update(params[:tweet])
  content_type :json
  {text: params[:tweet] }.to_json
end
