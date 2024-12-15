
    // 1.Building Teacher interface.

    interface Teacher {
        readonly firstName:string;
        readonly lastName:string;
        fullTimeEmployee:boolean;
        yearsOfExperience ?:number;
        location:string;
        [key:string]:any;   // to add any other attribute
    }


        // Creating Teacher object

        const teacher3: Teacher = {
            firstName:"John",
            lastName:"Doe",
            fullTimeEmployee:false,
            location:"Adama",
            contract:true //
        };

        console.log(teacher3);

        // An interface for directors that extends teachers functionality

    interface Directors extends Teacher {
        numberOfReports: number;
    }
    
    // Creating a Directors object.

    const director: Directors = {
        firstName: "Jane",
        lastName: "Smith",
        fullTimeEmployee: true,
        location: "Los Angeles",
        numberOfReports: 5,
        contract: true // Additional attribute
    };
