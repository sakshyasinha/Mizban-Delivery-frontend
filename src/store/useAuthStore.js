import {create} from 'zustand';
import {signup, login} from '../services/authService';

const  useAuthStore=create((set,get) => ({
    // form fields
    form:{
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        phone:"",
    },

    // error messages
    errors:{},

    // loading state
    loading:false,


    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem('token') || null,

      // set single field
      setField: (field,value)=>
        set((state)=>({
            form:{...state.form, [field]:value}
        })),

        // set multiple errors
        setErrors:(errors) => set({errors}),

        // reset form
        resetForm:()=>
            set({
                form :{
                    name:"",
                    email:"",
                    password:"",
                    confirmPassword:"",
                    phone:""
                },
                errors:{}
            }),

        // set Loading
        setLoading:(loading) => set({loading}),  

        //
        setUser: (user,token)=>{
            set({user,token});
            localStorage.setItem('user',JSON.stringify(user));
            localStorage.setItem('token',token);
        },

        // Signup validation
        validateSignup: () => {
            const { form } = get();
            const newErrors = {};

            if (!form.name.trim()) newErrors.name = "Name is required";

            if (!form.email.trim()) newErrors.email = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Email is invalid";

            if (!form.password) newErrors.password = "Password is required";
           
            if(!form.confirmPassword) 
                newErrors.confirmPassword ="Confirm password is required";

            if(form.password && form.confirmPassword && 
                form.password !== form.confirmPassword){
                    newErrors.confirmPassword="Passwords do not match";
                }

            if (!form.phone) newErrors.phone = "Phone is required";

            else if (form.phone.length !== 9) newErrors.phone = "Phone number must be 9 digits";
            else if (form.phone[0] !== "7") newErrors.phone = "The phone number must start with 7.";

            return newErrors;
        },

         // submit signup
        signupUser: async (navigate, toast) => {
            const { form, validateSignup, setErrors, setLoading, resetForm ,setUser} = get();

            const validationErrors = validateSignup();

            if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
            }

            setErrors({});
            setLoading(true);

            try {
            const {name, email, password, phone} = form;    
            const data = await signup({name, email,password,phone});

            toast.dismiss();
            toast.success(data.message);

            resetForm();

            setUser(data.user || {email} , data.token);

            navigate("/");

            } catch (err) {
            toast.dismiss();

            if(err.name === "HTTPError"){
                const errorData = await err.response.json().catch(()=>({message:err.message}));
                toast.error(errorData.message || "Signup failed. Please try again.");
            }else{
                toast.error(err.message || "Signup failed. Please try again.");
             }
            } 
            finally {
            setLoading(false);
            }
        },


        // Login Validation
        validateLogin: ()=>{
           const {form} = get();
           const newErrors={};

           if(!form.email.trim()) newErrors.email= "Email is required";
           else if(!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email="Email is invalid";
           else if (form.password.length < 8) 
            newErrors.password = "Password must be at least 8 characters";
        

           if(!form.password) newErrors.password="Password is required";

           return newErrors;
        },

        // Login Submit
        loginUser: async(navigate,toast)=>{

            const {form,validateLogin, setErrors, setLoading,setUser} = get();

            const validationErrors = validateLogin();

            if(Object.keys(validationErrors).length > 0){
                setErrors(validationErrors);
                return;
            }

            setErrors({});
            setLoading(true);

            try{
                const {email , password} = form;
                const data = await login({email,password});
                

                toast.dismiss();
               if (data.success) {
                    toast.success('Welcome Again!');
                    setUser(data.user || {email}, data.token);
                    navigate("/");
                } else {
                    toast.error(data.message || 'Login failed');
                }
                navigate("/");
            }catch(err){
                toast.dismiss();
               
                if(err.name === 'HTTPError'){
                    const errorData = await err.response.json().catch(()=>({message: err.message}));
                    toast.error(errorData.message || 'Login failed');
                }else {
                    toast.error(err.message || 'Login failed');
                }
            }finally{
                setLoading(false);
            }
        },

        // Logout
        logout:(navigate)=>{
            set({user:null,token:null});
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            navigate('/login');
        }


}));


export default useAuthStore;