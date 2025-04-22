# carRental
Car rental exercise for FERCHAU Austria GmbH

## Dependencies
Java 17\
Node.js 21.1.0 or higher (with npm)

## How to build and run

### Backend

Windows:
```
cd backend
mvnw.cmd clean package spring-boot:repackage
java -jar target\carRental-0.0.1-SNAPSHOT.jar
```

Linux:
```
cd backend
./mvnw clean package spring-boot:repackage
java -jar target/carRental-0.0.1-SNAPSHOT.jar
```

### Frontend

Windows/Linux:
```
cd frontend
npm run build
```
This creates a static site. To preview this site locally (localhost:4173), use the following command:
```
npm run preview
```
For deployment, refer to https://vite.dev/guide/static-deploy.
