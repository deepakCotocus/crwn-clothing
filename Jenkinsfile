pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('installation') {
            steps {
                //scripts {
                    sh 'npm install'
                    sh 'npm install -g yarn'
                    sh 'yarn build'
                //}
            }
        }
    }
}