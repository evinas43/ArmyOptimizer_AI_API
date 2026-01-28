# ArmyOptimizer API usage

API for the **ArmyOptimizer** project, built using **Bun**.

To install dependencies⚡:

```bash
bun install
```

To run🚀:

```bash
bun run index.ts
```
```bash
bun run dev
```

```bash
bun run start
```

The service is uploaded on railway🌐: 

```bash
armyoptimizeraiapi-production.up.railway.app
```

Request Example 📡:
```bash
Invoke-WebRequest `
  -Uri https://armyoptimizeraiapi-production.up.railway.app/chat `
  -Method POST `
  -UseBasicParsing `
  -Headers @{ "Content-Type" = "application/json" } `
  -Body '{
    "messages": [
      {
        "role": "user",
        "content": "Town Hall: 15. Troops: x10 dragons, x3 dragon riders. Spells: freeze, invisibilities. Heroes: Archer Queen, Grand Warden, Barbarian King, Royal Champion. Siege Machine: Battle Blimp. Objective: War."
      }
    ]
  }'
```


This project was created using `bun init` in bun v1.3.7. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
