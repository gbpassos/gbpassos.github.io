#!/bin/bash
export token=$(aws secretsmanager get-secret-value --region sa-east-1 --secret-id sanity --query SecretString --output text | jq -r .token)
