pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('installation') {
            steps {
                //scripts {
                    sh 'npm install'
                    sh 'yarn build'
                //}
            }
        }
    }
}