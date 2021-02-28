pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('installation') {
            steps {
                //scripts {
                    sh 'rm -rf node_modules/'
                    sh 'rm -rf build/'
                    sh 'npm install'
                    sh 'yarn build'
                //}
            }
        }
    }
}