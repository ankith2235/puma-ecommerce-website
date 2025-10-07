pipeline {
    agent any

    triggers {
        // Trigger via webhook (preferred) or poll every 5 minutes if webhook not used
        pollSCM('H/5 * * * *')
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Fetching latest code from develop branch...'
                git branch: 'develop', url: 'https://github.com/ankith2235/puma-ecommerce-website.git'
            }
        }

        stage('Deploy to Folder') {
            steps {
                echo 'Deploying code to /var/www/puma-ecommerce...'
                // Create folder if not exists
                sh 'mkdir -p /var/www/puma-ecommerce'
                // Copy code safely, excluding .git and Jenkins workspace files
                sh 'rsync -av --exclude=".git" --exclude="Jenkinsfile" ./ /var/www/puma-ecommerce/'
            }
        }

        stage('Build Complete') {
            steps {
                echo '✅ Build and deployment completed successfully!'
            }
        }
    }
}

