## Snippets-sg 📝  
This is custom personal snippets for help to codding reactJS

## Description  ✨
| **Snippet**       | **detail**                                             |
|-------------------|--------------------------------------------------------|
| up                | usePage function                                       |
| usePage           | usePage function                                       |
| ua                | useAPI function                                        |
| useAPI            | useAPI function                                        |
| uaf               | useAPIFile function                                    |
| useAPIFile        | useAPIFile function                                    |
| ums               | useMasterStore function                                |
| useMasterStore    | useMasterStore function                                |
| ut                | useTranslation function                                |
| useTranslation    | useTranslation function                                |
| ul                | useLoading function - Full                             |
| useLoading        | useLoading function - Full                             |
| ull               | useLoading function - Loading only                     |
| ula               | useLoading function - Alert only                       |
| un                | useNavigate function                                   |
| useNavigate       | useNavigate function                                   |
| upr               | useParams function                                     |
| useParams         | useParams function                                     |
| uss               | submitted state                                        |
| ud                | use hook useDialog function - DialogShow,DialogWarning |
| useDialog         | use hook useDialog function - DialogShow,DialogWarning |
| udw               | use hook useDialog function - DialogWarning            |
| udf               | use hook useDialog function - DialogOpenFile           |
| uda               | use hook useDialog function - Full                     |
| udap              | use hook useDialog function - Full Params              |
| itcp              | onInputTextChange function - props                     |
| onInputTextChange | onInputTextChange function - props                     |
| itc               | onInputTextChange function                             |
|                   |                                                        |

**usePage, up** - usePage function
~~~js 
  const page = usePage();
~~~

**useTranslation, ut** - useTranslation function
~~~js 
  const {t} = useTranslation();
~~~

**useAPI, ua** - useAPI function
~~~js 
  const [functionName]= useAPI(servicename.pathname);
~~~

**useAPIFile, uaf** - usePage function
~~~js 
  const [functionName]= useAPI(servicename.pathname);
~~~

**useMasterStore, ums** - useMasterStore function
~~~js 
  const [functionName]= useMasterStore(search);
~~~

**useLoading, ul** - useLoading function Full
~~~js 
  const { setIsLoading, setAlert } = useLoading();
~~~

**ull** - useLoading function Loading
~~~js 
  const { setIsLoading } = useLoading();
~~~

**ula** - useLoading function Alert
~~~js 
  const { setAlert } = useLoading();
~~~

**useNavigate, un** - useNavigate function
~~~js 
  const navigate = useNavigate();
~~~

**useParams, upr** - useParams function
~~~js 
  const {$id} = useParams();
~~~

**uss** - submitted state
~~~js 
  const [submitted, setSubmitted] = useState(false);
~~~

**useDialog, ud** - useDialog function
~~~js 
  const {setDialogWarn, setDialogShow} = useDialog();
~~~

**udw** - useDialog function DialogWarning
~~~js 
  const {setDialogWarn} = useDialog();
~~~

**uds** - useDialog function DialogShow
~~~js 
  const {setDialogShow} = useDialog();
~~~

**udf** - useDialog function DialogOpenFile
~~~js 
  const {setDialogFile} = useDialog();
~~~

**uda** - useDialog function Full
~~~js 
  const {setDialogWarn, setDialogShow, setDialogFile} = useDialog();
~~~

**udap** - useDialog function Full params
~~~js 
  const isDialog = useDialog();
~~~

**itcp,onInputTextChange** - onInputTextChange function props
~~~js 
  const onInputTextChange = (e, key) => {
    let val = (e.target && e.target.value !== undefined)?e.target.value  :'';
    let id = key && key !== '' ? key : (e.target && e.target.id) || '';

    props.setData({({
        ...props.data,
        [id]: val,
    });
  };
~~~

**itc** - onInputTextChange function 
~~~js 
  const onInputTextChange = (e, key) => {
    let val = (e.target && e.target.value !== undefined)?e.target.value  :'';
    let id = key && key !== '' ? key : (e.target && e.target.id) || '';

    setData({({
        ...data,
        [id]: val,
    });
  };
~~~

## License  
[MIT](https://choosealicense.com/licenses/mit/)  
