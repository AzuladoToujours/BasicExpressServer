pipeline {
    agent any
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

