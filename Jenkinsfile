pipeline {
    agent any

    triggers {
        // Trigger pipeline automatically when there's a push on the 'develop' branch
        pollSCM('* * * * *')
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'develop', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Pull to Folder') {
            steps {
                echo 'Pulling repository content to /var/www/myproject'
                sh 'mkdir -p /var/www/myproject'
                sh 'cp -r * /var/www/myproject/'
            }
        }

        stage('Build Complete') {
            steps {
                echo 'Build and sync completed successfully!'
            }
        }
    }
}
