# api_ia

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```
Example consult:
```bash
(Invoke-WebRequest `
  -Uri http://localhost:3000/chat `
  -Method POST `
  -UseBasicParsing `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{ 
    "messages": [ 
      { 
        "role": "user", 
        "content": "Resuelve Fibonacci en JavaScript" 
      } 
    ] 
  }'
).Content

```


This project was created using `bun init` in bun v1.3.7. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
