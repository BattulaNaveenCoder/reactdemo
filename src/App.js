import { Fragment, PureComponent } from 'react';
import './App.css';
import FragmentDemo from './components/Advanced/FragmentDemo';
import PureComponentDemo from './components/Advanced/PureComponentDemo';
import Table from './components/Advanced/Table';
import ClassClicked from './components/ClassClicked';
import Count from './components/Count';
import EventBind from './components/EventBind';
import Form from './components/Form';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import LifecycleA from './components/Lifecycle/LifecycleA';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponents from './components/Advanced/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Wellcome from './components/Wellcome';
import RefComponent from './components/Advanced/RefComponent';
import FRParentInput from './components/Advanced/FRParentInput';
import Hero from './components/Advanced/Hero';
import ErrorBoundary from './components/Advanced/ErrorBoundary';
import ClickCouter from './components/Advanced/ClickCouter';
import HoverCounter from './components/Advanced/HoverCounter';
import ClickCounterTwo from './components/Advanced/ClickCounterTwo';
import HoverCountTwo from './components/Advanced/HoverCountTwo';
import User from './components/Advanced/User';
import ParentCounter from './components/Advanced/ParentCounter';
import ComponentA from './components/Context/ComponentA';
import { UserProvider } from './components/Context/UserContext';
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
      <Demo/>
{/* <UserProvider value='Battula Naveen'>
<ComponentA/>
</UserProvider> */}
      

      {/* <ParentCounter render={(count,IncrementHandler)=><ClickCounterTwo IncrementHandler={IncrementHandler} count={count}/>}/>
      <ParentCounter render={(count,IncrementHandler)=><HoverCountTwo IncrementHandler={IncrementHandler} count={count}/>}/> */}
{/* <ClickCounterTwo/>
<HoverCountTwo/>
<User render={(isLoggedin)=>isLoggedin?'Battula Naveen':'Rajivan'}/> */}



{/* <ClickCouter/>
<HoverCounter/> */}


      {/* <ErrorBoundary>
      <Hero heroname='Superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname='Joker'/>
      </ErrorBoundary> */}
      
      
      
      
      {/* <FRParentInput/> */}
      {/* <RefComponent/> */}
      {/* <ParentComponents/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClicked/> */}
      {/* <Count/> */}
      {/* <Message/> */}
      {/* <h1>Hello Boss</h1> */}
       {/* <Greet name='Naveen' heroname='superman'><p1>This is Children</p1></Greet>
       <Greet name='Rajivan' heroname='batman'><button>onClick</button></Greet> */}
       {/* <Greet name='Revanth' heroname='ironman'/> */}
     {/* <Wellcome/> 
     <Hello/> */}
    </div>
  );
}

export default App;
