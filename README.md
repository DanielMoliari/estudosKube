# DevOps Complex Project

## Visão Geral
Este projeto demonstra uma aplicação web complexa com Docker, Kubernetes, CI/CD, monitoramento e logging.

## Estrutura do Projeto
- **app/**: Código fonte da aplicação web.
- **k8s/**: Manifests do Kubernetes.
- **helm/**: Helm charts para gerenciar o deployment.
- **monitoring/**: Configurações de monitoramento com Prometheus e Grafana.
- **logging/**: Configurações de logging com ELK Stack.

## Configuração
- **Docker:** `docker build -t <your-dockerhub-username>/devops-complex-project:latest .`
- **Kubernetes:** `kubectl apply -f k8s/`
- **Helm:** `helm install my-app helm/charts/app`

## Monitoramento e Logging
- **Prometheus:** `kubectl apply -f monitoring/prometheus/`
- **Grafana:** `kubectl apply -f monitoring/grafana/`
- **ELK Stack:** `kubectl apply -f logging/`
