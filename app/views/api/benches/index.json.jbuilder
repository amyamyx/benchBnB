json.array! @benches.each do |bench|
  json.extract! bench, :id, :lng, :lat, :description
end