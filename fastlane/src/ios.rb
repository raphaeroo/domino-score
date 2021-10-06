platform :ios do
  desc 'iOS: Increment build number and set the version to package.json version.'
  package = load_json(json_path: "./package.json")

  private_lane :inc_ver_ios do
    increment_build_number(
      xcodeproj: './ios/' + 'dominoscore' + '.xcodeproj'
    )
    increment_version_number(
      xcodeproj: './ios/' + 'dominoscore' + '.xcodeproj',
      version_number: package['version']
    )
  end


  desc 'Bump build numbers, and set the version to match the pacakage.json version.'
  lane :bump do
    inc_ver_ios
  end
end