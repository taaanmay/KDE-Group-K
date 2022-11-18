### 1 - How many new homes were approved loans when the annual interest rate was over 4.5%?

---

```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT
?irYear ?totalLoansApproved
WHERE
{
    ?irObj <http://www.w3.org/ns/r2rml#VariableInterestRate> ?ir .
    BIND (xsd:integer(STRAFTER(STRBEFORE(STR(?irObj), "M"), "_")) as ?irYear) .
    FILTER ( ?ir > 4.5) .
    ?laObj <http://example.com/ns#TotalHouses> ?totalLoansApproved .
    ?laObj <http://www.w3.org/2001/XMLSchema#gYear> ?laYear
    FILTER (?laYear = ?irYear)


}
```

---

### 2 - What was the average price for new properties in Dublin when the interest rate was less than 3%?

---

```
 QUERY HERE
```

---

### 3 - When the average new property price in Dublin was X, how many new loans were approved?

---

```
 QUERY HERE
```

---

### 4 - For how many years between 1999 and 2015 were the property prices in dublin above x and there were more than y loans approved

---

```
 QUERY HERE
```

---

### 5 - How many national school pupils in Dublin (or any county) ?

---

```
 QUERY HERE
```

---

### 6 - Where were property prices highest when the interest rates were highest?

---

```
 QUERY HERE
```

---

### 7 - What was the average price of second hand house prices when new property house price was greater than €400,000 ?

---

```
 QUERY HERE
```

---

### 8 - What was the average property price of new houses in Dublin in the year when interest rates changed the least?

---

```
 QUERY HERE
```

---

### 9 - What were the average property prices for second hand homes in Dublin when the total value of loans approved for second hand homes for the year was over €10,000,000,000 (10 billion)?

---

```
 QUERY HERE
```

---

### 10 - What were the average prices for new properties in Galway in years when interest rates were higher than all-time average interest rates (avg of interest rates 2003-2022).

---

```
 QUERY HERE
```

---
