lane :display_codepush_versions do
  Dir.chdir("..") do
    sh "appcenter codepush deployment list -a raphaeroo/Ynker-Android"
    sh "appcenter codepush deployment list -a raphaeroo/Ynker-IOS"
  end
end
