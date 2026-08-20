require 'faker'
require "open-uri"
Faker::Config.locale = 'en-GB'

UserActivity.delete_all
Match.delete_all
Activity.delete_all
User.delete_all

puts "start creating activities"
activities = ["crossfit","bodybuilding","tennis","climbing","boxing","swimming","golf","running"]
i = 0
while i < activities.length
  Activity.create(
  name: activities[i].to_s
  )
  i=i+1
end

activity = Activity.all

male_photo_ids = (1..33).to_a
female_photo_ids = (1..12).to_a + (34..66).to_a

puts "start creating users"
10.times do
  start_time1 = rand(5..23).to_i
  end_time1 = start_time1.to_i + rand(1..4).to_i
  gender = ["Male", "Female"].sample.to_s
  puts "Downloading image..."

  if gender == "Male"
    photo_num = male_photo_ids.sample
    file = URI.open("https://res.cloudinary.com/ltbxdfla/image/upload/gym-buddy-males/#{photo_num}.jpg")
  else
    photo_num = female_photo_ids.sample
    file = URI.open("https://res.cloudinary.com/ltbxdfla/image/upload/gym-buddy-females/#{photo_num}.jpg")
  end

  puts "Image downloaded."
  user = User.new(
    email: Faker::Internet.email,
    password: "123456",
    last_name: Faker::Name.last_name,
    gender: gender,
    address: ["London", "Shoreditch", "Haggerston", "Hoxton", "Islington", "Bethnal Green", "Islington", "Dalston", "Hackney", "Barbican", "India"].sample.to_s,
    age: rand(20..35).to_i,
    level_of_fitness: ["Beginner","Intermediate","Advanced"].sample.to_s,
    days_available: ["Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday","Sunday"].sample(3),
    start_time: start_time1,
    end_time: end_time1.to_i,
    partner_gender_preference: ["Male","Female","Any"].sample,
    bio: [
      "Pain is temporary, pride is forever",
      "Shut up and squat!",
      "Forget the glass slippers, princess wear running shoes",
      "Gym is my therapy.",
      "Work. Train. Repeat.",
      "Work hard now, selfie later.",
      "Fit and Fat differ by middle alphabet.",
      "I am in a good place right now, not emotionally, I am just at the gym.",
      "No pain, no gain. Shut up and train",
      "Change your body by changing your thoughts.",
      "Eat, sleep , gym , repeat."
    ].sample
  )
  if user.gender == "Male"
    user.first_name = Faker::Name.male_first_name
  else
    user.first_name = Faker::Name.female_first_name
  end
  # Skip geocoding during seeding
# user.geocode

  puts "Attaching photo..."
  user.photos.attach(io: file, filename: "#{photo_num}.jpg", content_type: "image/jpg")

  puts "Saving user..."

  unless user.save
    puts user.errors.full_messages
    exit
  end

  puts "User saved!"
end
users = User.all

puts "start creating user_activities"
users.each do |user|
  2.times do
  UserActivity.create!(
    user_id: user.id,
    activity_id: activity.sample.id
  )
  end
end

puts "start creating matches"
60.times do
  users = User.all
  user_1 = users.sample
  user_2 = users.sample
  while user_2 == user_1
    user_2 = users.sample
  end
  Match.create!(
    user_requester_id: user_1.id,
    user_receiver_id: user_2.id
)
end
puts "finished"
