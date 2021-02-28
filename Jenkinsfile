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
        stage ('push artifact') {
            steps {
                sh 'mkdir archive'
                //sh 'echo build > archive'
                zip zipFile: 'build.zip', archive: false, dir: 'build'
                archiveArtifacts artifacts: 'build.zip', fingerprint: true
            }
        }
    }
}