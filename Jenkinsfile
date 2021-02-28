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
                sh 'sshpass -p "Nist@1234N" rm -rf C:/xampp/htdocs/crown-clothing deepa@LAPTOP-8GT6R825
'
                sh 'sshpass -p "Nist@1234N" scp -r build deepa@LAPTOP-8GT6R825:C:/xampp/htdocs/crown-clothing
'
            }
        }
    }
}