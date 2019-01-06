define(['mock','jquery'],function(Mock,$){
    var data = Mock.mock({
        'list|10': [{
            'id|+1': 1
        }]
    })

    $('.list').html(JSON.parse(JSON.stringify(data)).list[5].id)
        
})