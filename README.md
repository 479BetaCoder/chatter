# chatter

#### Table of Contents

<!-- vim-markdown-toc GFM -->

* [Features](#features)
* [Infrastructure-Bringing up](#infrastrucure)
* [Frontend](#frontend)
* [Backend](#backend)
* [Redis-cache](#redis)
* [Redis-json](#redis)
* [Project Document](#documentation)

<!-- vim-markdown-toc -->

#### About Application
<!-- vim-markdown-toc GFM -->
* Token based authentication for user Sign in and Sign up  
* Web application where user can tweet and see the recent tweet from all other users. 
* Integrated News API on the home page for latest updates 
* Tweets include photo, username, tweet body, comments and likes on a particular post.  
* User can comment and like the tweet and view tweets posted by others
* Ability to delete offensive tweets before any user can see them 
* Tweets are stored in a database, so they never get lost 
* Ability to deploy front-end as a PWA so that it can run on devices 
* All the tweets are store to the backend database, which will help the user find their past tweets. 
* Redis-json as the middle layer.   
* React and material UI for frontend development  
* Session Based user management using cookies 
* Terraform to provision infrastructure 
* Kubernetes cluster on AWS 
* Logging using ELK stack 
* Monitoring using Prometheus 
* Continuous Integration to Docker Hub (A new image is created and deployed to docker hub) 
* Ingress Controller using NGINX 
* Application scaling 
<!-- vim-markdown-toc -->

#### Application Architecture
<!-- vim-markdown-toc GFM -->
![alt text](https://github.com/dburugupalli/chatter/blob/feature/helmcharts/Application%20Architecture.png)
<!-- vim-markdown-toc -->

