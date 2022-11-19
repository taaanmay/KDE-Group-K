### 1 - How many new homes were approved loans when the annual interest rate was over 4.5%?

---

```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT
?year ?totalLoansApproved
WHERE
{
    ?irObj <http://www.w3.org/ns/r2rml#VariableInterestRate> ?ir .
    ?irObj <http://www.w3.org/ns/r2rml#Year> ?irYearStr .
    BIND (xsd:integer(STRBEFORE(STR(?irYearStr), "M")) as ?year) .
    FILTER ( ?ir > 4.5) .
    ?laObj <http://example.com/ns#TotalHouses> ?totalLoansApproved .
    ?laObj <http://www.w3.org/2001/XMLSchema#gYear> ?year
}
```

---

### 2 - What was the average price for new properties in Dublin when the interest rate was less than 3%?

---

```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT
?year ?newPropertyPrice
#?ir ?irObj ?irYear ?newPropertyPrice ?nppYear
WHERE
{
    ?irObj <http://www.w3.org/ns/r2rml#VariableInterestRate> ?ir .
    ?irObj <http://www.w3.org/ns/r2rml#Year> ?irYearStr .
    BIND (xsd:integer(STRBEFORE(STR(?irYearStr), "M")) as ?year) .
    FILTER ( ?ir < 3.0) .
    ?nppObj <http://xmlns.com/foaf/0.1/hasAddressRegion/Region> "DUBLIN" .
    ?nppObj <http://xmlns.com/foaf/0.1/NewPropertyPrices> ?newPropertyPrice .
    ?nppObj <http://www.w3.org/2001/XMLSchema#gYear> ?year
}

```

---

### 3 - When the average new property price in Dublin was between 200,000 and 250,000, how many new loans were approved?

---

```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT
?totalLoansApproved ?year
WHERE
{
    ?nppObj <http://xmlns.com/foaf/0.1/hasAddressRegion/Region> "DUBLIN" .
    ?nppObj <http://xmlns.com/foaf/0.1/NewPropertyPrices> ?npp .
    FILTER ( ?npp < 250000 ) .
    FILTER ( ?npp > 200000 ) .
    ?nppObj <http://www.w3.org/2001/XMLSchema#gYear> ?year .
    ?laObj <http://example.com/ns#TotalHouses> ?totalLoansApproved .
    ?laObj <http://www.w3.org/2001/XMLSchema#gYear> ?year
}
```

---

### 4 - For how many years between 1999 and 2015 were the property prices in dublin above 200000 and there were more than 100000 loans approved

---

```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT (COUNT (DISTINCT ?year) AS ?Years)
WHERE
{
    ?nppObj <http://xmlns.com/foaf/0.1/hasAddressRegion/Region> "DUBLIN" .
    ?nppObj <http://xmlns.com/foaf/0.1/NewPropertyPrices> ?npp .
    FILTER ( ?npp > 200000 ) .
    ?nppObj <http://www.w3.org/2001/XMLSchema#gYear> ?year .
    ?laObj <http://example.com/ns#TotalHouses> ?totalLoansApproved .
    FILTER ( ?totalLoansApproved > 100000 ) .
    ?laObj <http://www.w3.org/2001/XMLSchema#gYear> ?year
}
```

---

### 5 - In the year with the most national school pupils in Dublin, what was the consumer interest rate?

---

```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT
?ir
WHERE
{
    {
        SELECT (MAX(?attendees) AS ?max) WHERE {
            ?schObj <http://www.w3.org/ns/r2rml#Region> "Carlow"@en .
            ?schObj <http://www.w3.org/ns/r2rml#ProgrammeName> ?programme .
            FILTER ( ?programme = "All mainstream national school programmes" ) .
            ?schObj <http://www.w3.org/ns/r2rml#ProgramAttendees> ?attendees .
        }
    }
    ?schObj2 <http://www.w3.org/ns/r2rml#ProgramAttendees> ?max .
    ?schObj2 <http://www.w3.org/ns/r2rml#Region> ?region .
    ?schObj2 <http://www.w3.org/ns/r2rml#ProgrammeName> ?programme .
    FILTER ( ?programme = "All mainstream national school programmes" ) .
    FILTER ( ?region = "Carlow"@en ) .
    ?irObj <http://www.w3.org/ns/r2rml#Year> ?irYearStr .
    BIND (xsd:integer(STRBEFORE(STR(?irYearStr), "M")) as ?iryear) .
    ?schObj2 <http://www.w3.org/ns/r2rml#ProgrammeYear> ?year .
    filter (?iryear = ?year)
    ?irObj <http://www.w3.org/ns/r2rml#Year> ?irYearStr .
    ?irObj <http://www.w3.org/ns/r2rml#ConsumerInterestRate> ?ir .
}
```

---

### 6 - Where were property prices highest when the interest rates were highest?

---

```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT DISTINCT
?region
WHERE
{
    {
        SELECT (MAX(?npp) AS ?maxnpp) WHERE
        {
            {
                SELECT (MAX(?ir) AS ?maxir) WHERE
                {
                    ?irObj <http://www.w3.org/ns/r2rml#VariableInterestRate> ?ir .
                }
            }
            ?irObj <http://www.w3.org/ns/r2rml#VariableInterestRate> ?maxir .
            ?irObj <http://www.w3.org/ns/r2rml#Year> ?irYearStr .
            BIND (xsd:integer(STRBEFORE(STR(?irYearStr), "M")) as ?year) .
            ?nppObj <http://www.w3.org/2001/XMLSchema#gYear> ?year .

            ?nppObj <http://xmlns.com/foaf/0.1/NewPropertyPrices> ?npp .
        }
    }
    ?nppObj <http://xmlns.com/foaf/0.1/NewPropertyPrices> ?maxnpp .
    ?nppObj <http://xmlns.com/foaf/0.1/hasAddressRegion/Region> ?region .
}
```

---

### 7 - What was the average price approved by national banks for second hand houses when new property house price (nationally) was greater than €300,000 ?

---

```

select ?year ?averageLoanPrice where {
    ?years <http://xmlns.com/foaf/0.1/hasAddressRegion/Region> "NATIONAL" .
    ?years <http://xmlns.com/foaf/0.1/NewPropertyPrices> ?newHousePrices .
    FILTER ( ?newHousePrices >= 300000) .
    ?years <http://www.w3.org/2001/XMLSchema#gYear> ?year.
    ?oldHousesSubject <http://www.w3.org/2001/XMLSchema#gYear> ?year.
    ?oldHousesSubject <http://example.com/ns#ApprovedByNationalBanks> ?averageLoanPrice.
} limit 100

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
