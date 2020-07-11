
pipeline{
agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
 stages{
       stage('Checkout-git'){
              steps {
               git poll: true, url: 'https://github.com/AzuladoToujours/BasicExpressServer.git'    
              }
       }
       stage('InstallRequirements'){
              steps {
                      sh 'npm install'
              }
       }
       // stage('TestApp'){
       //        steps {
       //                sh 'npm test'
       //        }
       // }
       stage('RunApp'){
              steps {
                      sh 'npm start & ls'
              }
       }
 
 }
}