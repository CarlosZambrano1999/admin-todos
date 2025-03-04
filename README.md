## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Docker
1. Levantar la base de datos
```
docker compose up -d
````

2. Renombar el .env.template a .env
3.Remplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

##Prisma command

````
npx prisma init
npx prisma migrate dev
npx prisma generate
```` 