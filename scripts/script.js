document.getElementById("calculate").addEventListener("click", calculate)

function calculate()
{
    business_type_index = document.getElementById("business-type").selectedIndex
    service_type_index = document.getElementById("service-type").selectedIndex
    participants = document.getElementById("participants").value
    urgency_index = document.getElementById("urgency").selectedIndex
    if(business_type_index == 1)
    {
        fee = 15000
    }
    else if(business_type_index == 2)
    {
        fee = 20000
    }
    else
    {
        fee = 10000
    }
    fee = fee*participants
    if(service_type_index == 3)
    {
        fee = fee + 20000
    }
    if(urgency_index == 2)
    {
        fee = fee + 25000
    }
    else if (urgency_index == 1)
    {
        fee = fee + 50000
    }
    document.getElementById("offer").value = `${fee} Forint`
}