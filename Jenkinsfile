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
                sh 'zip -r  crown-clothing.zip build'
                //sh 'sshpass -p "Nist@1234N" rm C:/xampp/htdocs/crown-clothing.zip deepa@LAPTOP-8GT6R825'
                //sh 'sshpass -p "Nist@1234N" scp -r build deepa@LAPTOP-8GT6R825:C:/xampp/htdocs/crown-clothing'

                sh 'sshpass -p "Nist@1234N" rm -rf C:/xampp/htdocs/crown-clothing deepa@LAPTOP-8GT6R825'
                sh 'sshpass -p "Nist@1234N" rm C:/xampp/htdocs/crown-clothing.zip deepa@LAPTOP-8GT6R825'

                sh 'sshpass -p "Nist@1234N" scp -r crown-clothing.zip deepa@LAPTOP-8GT6R825:C:/xampp/htdocs'

                sh 'sshpass -p "Nist@1234N" unzip C:/xampp/htdocs/crown-clothing.zip -d C:/xampp/htdocs/crown-clothing deepa@LAPTOP-8GT6R825'
                sh 'sshpass -p "Nist@1234N" cp -RT C:/xampp/htdocs/crown-clothing/build C:/xampp/htdocs/crown-clothing deepa@LAPTOP-8GT6R825'
                sh 'sshpass -p "Nist@1234N" rm -rf C:/xampp/htdocs/crown-clothing/build deepa@LAPTOP-8GT6R825'
            }
        }
    }
}