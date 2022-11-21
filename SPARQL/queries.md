<h3 id="1-how-many-new-homes-were-approved-loans-when-the-annual-interest-rate-was-over-4-5-">1 - How many new homes were approved loans when the annual interest rate was over 4.5%?</h3>
<hr>
<pre><code>PREFIX <span class="hljs-string">xsd:</span> &lt;<span class="hljs-string">http:</span><span class="hljs-comment">//www.w3.org/2001/XMLSchema#&gt;</span>
SELECT DISTINCT
?year ?totalLoansApproved
WHERE
{
    ?irObj &lt;http:<span class="hljs-comment">//www.w3.org/ns/r2rml#VariableInterestRate&gt; ?ir .</span>
    ?irObj &lt;http:<span class="hljs-comment">//www.w3.org/ns/r2rml#Year&gt; ?irYearStr .</span>
    BIND (<span class="hljs-string">xsd:</span>integer(STRBEFORE(STR(?irYearStr), "M")) as ?year) .
    FILTER ( ?ir &gt; 4.5) .
    ?laObj &lt;http:<span class="hljs-comment">//example.com/ns#TotalHouses&gt; ?totalLoansApproved .</span>
    ?laObj &lt;http:<span class="hljs-comment">//www.w3.org/2001/XMLSchema#gYear&gt; ?year</span>
}
</code></pre><hr>
<h3 id="2-what-was-the-average-price-for-new-properties-in-dublin-when-the-interest-rate-was-less-than-3-">2 - What was the average price for new properties in Dublin when the interest rate was less than 3%?</h3>
<hr>
<pre><code>PREFIX <span class="hljs-string">xsd:</span> &lt;<span class="hljs-string">http:</span><span class="hljs-comment">//www.w3.org/2001/XMLSchema#&gt;</span>
SELECT DISTINCT
?year ?newPropertyPrice
#?ir ?irObj ?irYear ?newPropertyPrice ?nppYear
WHERE
{
    ?irObj &lt;http:<span class="hljs-comment">//www.w3.org/ns/r2rml#VariableInterestRate&gt; ?ir .</span>
    ?irObj &lt;http:<span class="hljs-comment">//www.w3.org/ns/r2rml#Year&gt; ?irYearStr .</span>
    BIND (<span class="hljs-string">xsd:</span>integer(STRBEFORE(STR(?irYearStr), "M")) as ?year) .
    FILTER ( ?ir &lt; 3.0) .
    ?nppObj &lt;http:<span class="hljs-comment">//xmlns.com/foaf/0.1/hasAddressRegion/Region&gt; "DUBLIN" .</span>
    ?nppObj &lt;http:<span class="hljs-comment">//xmlns.com/foaf/0.1/NewPropertyPrices&gt; ?newPropertyPrice .</span>
    ?nppObj &lt;http:<span class="hljs-comment">//www.w3.org/2001/XMLSchema#gYear&gt; ?year</span>
}
</code></pre><hr>
<h3 id="3-when-the-average-new-property-price-in-dublin-was-between-200-000-and-250-000-how-many-new-loans-were-approved-">3 - When the average new property price in Dublin was between 200,000 and 250,000, how many new loans were approved?</h3>
<hr>
<pre><code>PREFIX <span class="hljs-symbol">xsd:</span> &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#&gt;</span>
SELECT DISTINCT
?totalLoansApproved ?year
WHERE
{
    ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/xmlns.com/foaf</span><span class="hljs-regexp">/0.1/has</span>AddressRegion/Region&gt; <span class="hljs-string">"DUBLIN"</span> .
    ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/xmlns.com/foaf</span><span class="hljs-regexp">/0.1/</span>NewPropertyPrices&gt; ?npp .
    FILTER ( ?npp &lt; <span class="hljs-number">250000</span> ) .
    FILTER ( ?npp &gt; <span class="hljs-number">200000</span> ) .
    ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?year .</span>
    ?laObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/example.com/ns</span><span class="hljs-comment">#TotalHouses&gt; ?totalLoansApproved .</span>
    ?laObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?year</span>
}
</code></pre><hr>
<h3 id="4-for-how-many-years-between-1999-and-2015-were-the-property-prices-in-dublin-above-200000-and-there-were-more-than-100000-loans-approved">4 - For how many years between 1999 and 2015 were the property prices in dublin above 200000 and there were more than 100000 loans approved</h3>
<hr>
<pre><code>PREFIX <span class="hljs-symbol">xsd:</span> &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#&gt;</span>
SELECT (COUNT (DISTINCT ?year) AS ?Years)
WHERE
{
    ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/xmlns.com/foaf</span><span class="hljs-regexp">/0.1/has</span>AddressRegion/Region&gt; <span class="hljs-string">"DUBLIN"</span> .
    ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/xmlns.com/foaf</span><span class="hljs-regexp">/0.1/</span>NewPropertyPrices&gt; ?npp .
    FILTER ( ?npp &gt; <span class="hljs-number">200000</span> ) .
    ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?year .</span>
    ?laObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/example.com/ns</span><span class="hljs-comment">#TotalHouses&gt; ?totalLoansApproved .</span>
    FILTER ( ?totalLoansApproved &gt; <span class="hljs-number">100000</span> ) .
    ?laObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?year</span>
}
</code></pre><hr>
<h3 id="5-in-the-year-with-the-most-national-school-pupils-in-dublin-what-was-the-consumer-interest-rate-">5 - In the year with the most national school pupils in Dublin, what was the consumer interest rate?</h3>
<hr>
<pre><code>PREFIX xsd: &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/2001/</span>XMLSchema<span class="hljs-comment">#&gt;</span>
SELECT DISTINCT
?ir
WHERE
{
    {
        SELECT (MAX(?attendees) AS ?max) WHERE {
            ?schObj &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#Region&gt; "Carlow"@en .</span>
            ?schObj &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#ProgrammeName&gt; ?programme .</span>
            FILTER ( ?programme = <span class="hljs-string">"All mainstream national school programmes"</span> ) .
            ?schObj &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#ProgramAttendees&gt; ?attendees .</span>
        }
    }
    ?schObj2 &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#ProgramAttendees&gt; ?max .</span>
    ?schObj2 &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#Region&gt; ?region .</span>
    ?schObj2 &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#ProgrammeName&gt; ?programme .</span>
    FILTER ( ?programme = <span class="hljs-string">"All mainstream national school programmes"</span> ) .
    FILTER ( ?region = <span class="hljs-string">"Carlow"</span>@en ) .
    ?irObj &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#Year&gt; ?irYearStr .</span>
    BIND (xsd:integer(STRBEFORE(STR(?irYearStr), <span class="hljs-string">"M"</span>)) as ?iryear) .
    ?schObj2 &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#ProgrammeYear&gt; ?year .</span>
    filter (?iryear = ?year)
    ?irObj &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#Year&gt; ?irYearStr .</span>
    ?irObj &lt;http:<span class="hljs-regexp">//</span>www.w3.org<span class="hljs-regexp">/ns/</span>r2rml<span class="hljs-comment">#ConsumerInterestRate&gt; ?ir .</span>
}
</code></pre><hr>
<h3 id="6-where-were-property-prices-highest-when-the-interest-rates-were-highest-">6 - Where were property prices highest when the interest rates were highest?</h3>
<hr>
<pre><code>PREFIX <span class="hljs-string">xsd:</span> &lt;<span class="hljs-string">http:</span><span class="hljs-comment">//www.w3.org/2001/XMLSchema#&gt;</span>
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
                    ?irObj &lt;http:<span class="hljs-comment">//www.w3.org/ns/r2rml#VariableInterestRate&gt; ?ir .</span>
                }
            }
            ?irObj &lt;http:<span class="hljs-comment">//www.w3.org/ns/r2rml#VariableInterestRate&gt; ?maxir .</span>
            ?irObj &lt;http:<span class="hljs-comment">//www.w3.org/ns/r2rml#Year&gt; ?irYearStr .</span>
            BIND (<span class="hljs-string">xsd:</span>integer(STRBEFORE(STR(?irYearStr), "M")) as ?year) .
            ?nppObj &lt;http:<span class="hljs-comment">//www.w3.org/2001/XMLSchema#gYear&gt; ?year .</span>

            ?nppObj &lt;http:<span class="hljs-comment">//xmlns.com/foaf/0.1/NewPropertyPrices&gt; ?npp .</span>
        }
    }
    ?nppObj &lt;http:<span class="hljs-comment">//xmlns.com/foaf/0.1/NewPropertyPrices&gt; ?maxnpp .</span>
    ?nppObj &lt;http:<span class="hljs-comment">//xmlns.com/foaf/0.1/hasAddressRegion/Region&gt; ?region .</span>

}
</code></pre><hr>

<h3 id="7-what-was-the-average-price-approved-by-national-banks-for-second-hand-houses-when-new-property-house-price-nationally-was-greater-than-300-000-">7 - What was the average price approved by national banks for second hand houses when new property house price (nationally) was greater than €300,000 ?</h3>
<hr>
<pre><code>
<span class="hljs-keyword">select</span> ?<span class="hljs-keyword">year</span> ?averageLoanPrice <span class="hljs-keyword">where</span> {
    ?<span class="hljs-keyword">years</span> &lt;<span class="hljs-keyword">http</span>://xmlns.com/foaf/<span class="hljs-number">0.1</span>/hasAddressRegion/Region&gt; <span class="hljs-string">"NATIONAL"</span> .
    ?<span class="hljs-keyword">years</span> &lt;<span class="hljs-keyword">http</span>://xmlns.com/foaf/<span class="hljs-number">0.1</span>/NewPropertyPrices&gt; ?newHousePrices .
    FILTER ( ?newHousePrices &gt;= <span class="hljs-number">300000</span>) .
    ?<span class="hljs-keyword">years</span> &lt;<span class="hljs-keyword">http</span>://www.w3.org/<span class="hljs-number">2001</span>/<span class="hljs-keyword">XMLSchema</span>#gYear&gt; ?year.
    ?oldHousesSubject &lt;<span class="hljs-keyword">http</span>://www.w3.org/<span class="hljs-number">2001</span>/<span class="hljs-keyword">XMLSchema</span>#gYear&gt; ?year.
    ?oldHousesSubject &lt;<span class="hljs-keyword">http</span>://example.com/ns#ApprovedByNationalBanks&gt; ?averageLoanPrice.
} <span class="hljs-keyword">limit</span> <span class="hljs-number">100</span>
</code></pre><hr>
<h3 id="8-what-was-the-average-property-price-of-new-houses-in-dublin-in-the-year-when-loan-approvals-changed-the-least-">8 - What was the average property price of new houses in Dublin in the year when loan approvals changed the least?</h3>
<hr>
<pre><code>PREFIX <span class="hljs-symbol">xsd:</span> &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#&gt;</span>
SELECT ?year ?newPropertyPrice
WHERE
{
    {
        {
            SELECT (MIN(?laChange) AS ?minlaChange) WHERE
            {
                ?laObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/example.com/ns</span><span class="hljs-comment">#TotalHouses&gt; ?la .</span>
                ?laObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?laYear .</span>
                BIND (?laYear - <span class="hljs-number">1</span> AS ?lastyear) .
                ?laObjPrev &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?lastyear .</span>
                ?laObjPrev &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/example.com/ns</span><span class="hljs-comment">#TotalHouses&gt; ?laPrev .</span>
                BIND (ABS(?la - ?laPrev) AS ?laChange) .
            }
        }
        ?laObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/example.com/ns</span><span class="hljs-comment">#TotalHouses&gt; ?la .</span>
        ?laObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?year .</span>
        BIND (?year - <span class="hljs-number">1</span> AS ?lastyear) .
        ?laObjPrev &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?lastyear .</span>
        ?laObjPrev &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/example.com/ns</span><span class="hljs-comment">#TotalHouses&gt; ?laPrev .</span>
        BIND (ABS(?la - ?laPrev) AS ?laChange) .
        FILTER (?laChange = ?minlaChange)
        ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/www.w3.org/</span><span class="hljs-number">2001</span>/XMLSchema<span class="hljs-comment">#gYear&gt; ?year .</span>
        ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/xmlns.com/foaf</span><span class="hljs-regexp">/0.1/has</span>AddressRegion/Region&gt; <span class="hljs-string">"DUBLIN"</span> .
        ?nppObj &lt;<span class="hljs-symbol">http:</span>/<span class="hljs-regexp">/xmlns.com/foaf</span><span class="hljs-regexp">/0.1/</span>NewPropertyPrices&gt; ?newPropertyPrice .
    }
}
</code></pre><hr>
<h3 id="9-what-were-the-average-value-of-a-loan-approved-by-dublin-banks-for-second-hand-homes-in-dublin-when-the-total-value-of-loans-approved-for-second-hand-homes-for-the-year-was-over-10-000-000-000-10-billion-">9 - What were the average value of a loan approved by Dublin Banks for second hand homes in Dublin when the total value of loans approved for second hand homes for the year was over €10,000,000,000 (10 billion)?</h3>
<hr>
<pre><code>PREFIX <span class="hljs-string">xsd:</span> &lt;<span class="hljs-string">http:</span><span class="hljs-comment">//www.w3.org/2001/XMLSchema#&gt;</span>
SELECT DISTINCT
?year ?loansApprovedByDublinBanks
WHERE
{
    ?laObj &lt;http:<span class="hljs-comment">//example.com/ns#OtherHouseValue&gt; ?housesValue .</span>
    BIND((?housesValue * 1000000.0) AS ?totalValue) .
    FILTER(?totalValue &gt; 10000000000.0) .
    ?laObj &lt;http:<span class="hljs-comment">//www.w3.org/2001/XMLSchema#gYear&gt; ?year .</span>
    ?shHouses &lt;http:<span class="hljs-comment">//www.w3.org/2001/XMLSchema#gYear&gt; ?year .</span>
    ?shHouses &lt;http:<span class="hljs-comment">//example.com/ns#ApprovedByDublinBanks&gt; ?loansApprovedByDublinBanks .</span>
}
</code></pre><hr>
<h3 id="10-what-were-the-average-prices-for-new-properties-in-galway-in-years-when-interest-rates-were-higher-than-all-time-average-interest-rates-avg-of-interest-rates-2003-2022-">10 - What were the average prices for new properties in Galway in years when interest rates were higher than all-time average interest rates (avg of interest rates 2003-2022).</h3>
<hr>
<pre><code><span class="hljs-keyword">select</span> ?pricesInGalway <span class="hljs-keyword">where</span> {
    {
# Find the average interest rate
                <span class="hljs-keyword">SELECT</span> (<span class="hljs-keyword">AVG</span>(?ir) <span class="hljs-keyword">AS</span> ?avgInterestRate) <span class="hljs-keyword">WHERE</span>
                {
                    ?irObj &lt;<span class="hljs-keyword">http</span>://www.w3.org/ns/r2rml#VariableInterestRate&gt; ?ir .
                }
    }
#   Filter Interest Rates that <span class="hljs-keyword">are</span> <span class="hljs-keyword">over</span> the average IR
    ?irObj &lt;<span class="hljs-keyword">http</span>://www.w3.org/ns/r2rml#VariableInterestRate&gt; ?interestRates .
    FILTER(?interestRates &gt; ?avgInterestRate).

# Find the <span class="hljs-keyword">years</span> <span class="hljs-keyword">with</span> the higher IRs

    ?irObj &lt;<span class="hljs-keyword">http</span>://www.w3.org/ns/r2rml#<span class="hljs-keyword">Year</span>&gt; ?yearWithMonth.
    BIND (xsd:<span class="hljs-built_in">integer</span>(STRBEFORE(<span class="hljs-keyword">STR</span>(?yearWithMonth), <span class="hljs-string">"M"</span>)) <span class="hljs-keyword">as</span> ?yearWithHigherIR) .

# Find the prices <span class="hljs-keyword">of</span> <span class="hljs-keyword">new</span> houses <span class="hljs-keyword">in</span> Galway <span class="hljs-keyword">in</span> those <span class="hljs-keyword">years</span>

    ?newHouseSubj &lt;<span class="hljs-keyword">http</span>://www.w3.org/<span class="hljs-number">2001</span>/<span class="hljs-keyword">XMLSchema</span>#gYear&gt; ?yearWithHigherIR.
    ?newHouseSubj &lt;<span class="hljs-keyword">http</span>://xmlns.com/foaf/<span class="hljs-number">0.1</span>/hasAddressRegion/Region&gt; <span class="hljs-string">"GALWAY"</span>.
    ?newHouseSubj &lt;<span class="hljs-keyword">http</span>://xmlns.com/foaf/<span class="hljs-number">0.1</span>/NewPropertyPrices&gt; ?pricesInGalway.

}
</code></pre><hr>
