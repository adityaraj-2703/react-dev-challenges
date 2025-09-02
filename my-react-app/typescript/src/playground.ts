

type Department = {
  name: string;
};

type Employee = {
  id: number;
  name: string;
  department: Department;
};
// --• EXERCISE 1 • --
// * - Explain shallow clone vs deep• clone,
// *. -• Implement each type of clone and test the outcomes
// * /
const employee: Employee = {
  id: 1,
  name: "Andrew",
  department: { name: "energy" },
};

const employee1 = {...employee };
// console.log(employee);
// console.log(employee1);
employee1.name = "Aditya"; //does not affect original
employee1.department.name = "Health"; //changes original department
console.log(employee,"employee");
console.log(employee1,"employee1");

const deepclone = JSON.parse(JSON.stringify(employee));
deepclone.department.name = "deep";
console.log(employee,"employee");
console.log(deepclone,"deepclone");

const deep2 = structuredClone(employee);
deep2.department.name = "deep2";
console.log(employee,"employee");
console.log(deep2,"deep2");




// *----------EXERCISE 2•-----------*/
// * Write a function to dedupe "employees" by removing duplicated id
// * And then sort by id in ascending order
// * • output → [
// *.. {• id: 1, name: "Andrew", department: (• name: "energy" } •),
// *.. {• id: 2, name: "Lucas", department: {• name: "energy" }•),
// *. {• id: 3, name: "Seven", department: {• name: vehicle" } • }
// *•]
const employees: Employee[] | null = [
  { id: 1, name: "Andrew", department: { name: "energy" } },
  { id: 2, name: "Lucas", department: { name: "energy" } },
  { id: 1, name: "Andrew", department: { name: "energy" } },
  { id: 3, name: "Seven", department: { name: "vehicle" } },
];

const dedupe = (employees: Employee[] | null):Employee[] =>{
    if(!employees) return [];
    const seen = new Set<number>();
    const ue = [];
    
    return employees.filter((e)=>{
        if(seen.has(e.id)){
            return false;
        }
        seen.add(e.id);
        ue.push(e);
        return true;
    }).sort((a,b)=>a.id-b.id);
}
console.log(dedupe(employees));

/*
• EXERCISE 3-
…・・・*/
// * Given an object containing sensitive information and a list of keys
// * mask the sensitive data with *****• (match the string length)
// * output → (•id: 1, password:• *****, secret: •******•}
// */
const allowedClient = { id: 1, password: "123", secret: 'abcd' };
const sensitiveKeys = ['password', 'secret'];

const maskData = (obj: any,keys:any): any=>{
    const res: any = {};
    for(const key in obj){
        if(keys.includes(key) && typeof(obj[key]==="string")){
            res[key] = "*".repeat(obj[key].length);
        }
        else{
            res[key] = obj[key];
        }
    }
    return res;

}
console.log(maskData(allowedClient,sensitiveKeys));

// - Create a function that returns "allowedClient" as a promise
// - Create a function that returns "sensitiveKeys" as a promise
// - Create a function that
// • •1) • fetches "allowedClient" and "sensitiveKeys" via those functions
// • • 2) takes the masking function from EXERCISE 3• as a callback
// * output → (• id: 1, password: *****, secret:


const getAllowedClients = () =>{
    return Promise.resolve(allowedClient);
}

const getSensitiveKeys = () =>{
    return Promise.resolve(sensitiveKeys);
}
const processData = async(maskData: (obj: object, keys: string[]) => object) => {
    const[client,keys] = await Promise.all([
        getAllowedClients(),
        getSensitiveKeys(),
    ]);
    return maskData(client,keys);
};

processData(maskData).then(res =>{
    console.log(res,"promise");
});

