const country={
    1:"India",
    14:"Australia",
    30:"Brazil",
    37:"Canada",
    94:"Indonesia",
    148:"New Zeland",
    162:"Phillipines",
    166:"Qatar",
    184:"Singapore",
    189:"South Africa",
    191:"Sri Lanka",
    208:"Turkey",
    214:"UAE",
    215:"United Kingdom",
    216:"United States",
};
export function convertsCountry(id)
{
    console.log(country[id]);
    return country[id];
}