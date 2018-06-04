class Bench < ApplicationRecord
  validates :lat, :lng, :description, presence: true
end
