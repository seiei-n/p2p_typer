#!/bin/bash
echo "Prepareing Modules..."

cd front
yarn
cd ../
cd api
npm ci
cd ../

docker-compose -f docker-compose.dev.yml up -d --build