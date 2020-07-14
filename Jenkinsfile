pipeline {
    agent any
    tools {nodejs "node"}
    stages {
       stage('Checkout-git'){
              steps {
               git poll: true, url: 'https://github.com/AzuladoToujours/BasicExpressServer.git'    
              }
       }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                 sh 'npm test'
            }
        }
    }
}

