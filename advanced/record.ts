{
    type PageInfo = {
        title:string
    }
    type Page = 'home' | 'about' | 'contact';

    const nav: Record<Page,PageInfo> = {

        //Page를 key로, PageInfo를 value로
        home:{title:'Home'},
        about:{title:'About'},
        contact:{title:'Contact'}

    }
}