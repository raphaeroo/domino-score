platform :android do
  desc 'Build the Android application.'
  lane :build do
    gradle(task: 'clean', project_dir: 'android/')
    gradle(task: 'assemble', build_type: 'release', project_dir: 'android/')
  end

  desc 'Android: Increment versionCode and set versionName to package.json version.'
  package = load_json(json_path: "./package.json")

  private_lane :inc_ver_and do
    increment_version_code(
      gradle_file_path: "./android/app/build.gradle",
    )

    increment_version_name(
      gradle_file_path: "./android/app/build.gradle",
      version_name: package['version']
    )
  end

  desc 'Bump build numbers, and set the version to match the pacakage.json version.'
  lane :bump do
    inc_ver_and
  end
end