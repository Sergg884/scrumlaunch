<template>
  <div class="hire_developers">

    <Hero 
      :lang="dev_lang"
    />

    <OurClients />

    <div class="container section_7">
      <p>
        Trusted by over <span class="mark">200 clients</span> worldwide since
        2015
      </p>
      <div class="circle_container">
        <img src="/images/hire-developers/statistic_pc.svg" alt="statistic_1" />
        <img
          src="/images/hire-developers/statistic_tablet.svg"
          alt="statistic_2"
        />
      </div>
      <div class="btn_wrap">
        <NuxtLink to="/contact-us" class="btn on_dark_bg"
          >hire developers</NuxtLink
        >
      </div>
    </div>

    <div class="container section_1">
      <div class="flex">
        <div>
          <p class="title">
            Hire <span class="mark">{{ dev_lang }} Experts</span><br />On Demand
          </p>
          <p class="desc">
            Hire {{ dev_lang }} developers that are vetted, trained and managed
            by Scrumlaunch. We place high-quality Python developers across all
            types of businesses from venture-backed startups to large
            corporations.
          </p>
        </div>
        <div class="developer">
          <div class="developer__image first"></div>
          <p class="developer__name">Jonas K</p>
        </div>
        <div class="developer">
          <div class="developer__image second"></div>
          <p class="developer__name">Yuliia G</p>
        </div>
        <div class="developer">
          <div class="developer__image third"></div>
          <p class="developer__name">Joao P</p>
        </div>
      </div>
      <div class="dev_map_tablet">
        <img src="/images/hire-developers/dev_map.svg" alt="" />
      </div>
      <MetricsCard :lang="dev_lang" />
    </div>
    <div class="container section_2">
      <h2>Developer Profiles</h2>
      <DevelopersProfilesCards />
    </div>

    <div class="container section_3">
      <div class="first_block">
        <div>
          <p class="title">The ScrumLaunch Approach</p>
          <p class="description">
            ScrumLaunch combines the scale of leading talent matching platforms
            with the personalization of a high touch agency to ensure the best
            client experience.
          </p>
        </div>
        <div class="animation">
          <lottie
            name="scrumlaunchMobileAnim"
            loop
            :options="{
              animationData: require('@/assets/animation/scrumlaunch-mobile.json'),
            }"
          />
        </div>
      </div>
      <div class="approach">
        <div class="approach__item">
          <div class="approach__icon">
            <img src="/images/hire-developers/faq_3.svg" alt="" />
          </div>
          <p class="approach__title">Discovery & Staffing</p>
          <p class="approach__desc">
            We have talent hubs in Eastern Europe and Latin America which allow
            us to source and vet the world’s best talent on demand.
          </p>
        </div>

        <div class="approach__item">
          <div class="approach__icon">
            <img
              src="/images/hire-developers/how_it_works__step_3.svg"
              alt=""
            />
          </div>
          <p class="approach__title">Onboarding</p>
          <p class="approach__desc">
            Each project is unique. We follow a very structured onboarding
            process to ensure the team has detailed context about the project,
            desired workflows and business objectives.
          </p>
        </div>

        <div class="approach__item">
          <div class="approach__icon">
            <img src="/images/hire-developers/approach_1.svg" alt="" />
          </div>
          <p class="approach__title">Ongoing Delivery</p>
          <p class="approach__desc">
            Communication, transparency and process are the key to any great
            software team. Our processes have been refined across over 200
            projects and provide an optimal framework for global team
            collaboration.
          </p>
        </div>
      </div>
      <div class="btn_wrap">
        <NuxtLink to="/contact-us" class="btn on_white_bg"
          >hire developers</NuxtLink
        >
      </div>
    </div>

    <div class="container section_4">
      <p class="accordian_title">Common Interview Questions</p>
      <p class="accordian_desc">
        Hiring fresh talent {{ dev_lang }} requires testing and reviewing
        candidates for their technical skills and proficiency in the programming
        language. That means a fair amount of software development experience is
        expected.
      </p>
      <div class="accordion_wrapper">
        <div
          v-for="(item, i) in questions[
            questions[dev_lang] ? dev_lang : 'other'
          ]"
          :key="i"
        >
          <Accordion
            :title="item.title"
            :description="item.description"
            :list="item.list"
            :imgNumber="item.number"
          />
        </div>
      </div>
      <div class="btn_wrap">
        <NuxtLink to="/contact-us" class="btn on_white_bg"
          >hire developers</NuxtLink
        >
      </div>
    </div>

    <div class="container section_5">
      <p class="title">
        ScrumLaunch <span class="mark">{{ dev_lang }}</span> Developers at a
        Glance
      </p>
      <p class="description">
        Our software development and design teams played a pivotal role in many
        client success stories in 2021.
      </p>
      <div class="statistic-container">
        <div class="square">
          <p class="number">5 Avg Years</p>
          <p class="desc">Of Experience</p>
        </div>
        <div class="circle">
          <Logo fill="#1E1F21" />
        </div>
        <div class="square">
          <p class="number">Less Than 3%</p>
          <p class="desc">Applicant Acceptance Rate</p>
        </div>
        <div class="square">
          <p class="number">5+ Hours</p>
          <p class="desc">Of Technical Interviews</p>
        </div>
      </div>
      <div class="btn_wrap">
        <NuxtLink to="/contact-us" class="btn on_dark_bg"
          >hire developers</NuxtLink
        >
      </div>
    </div>

    <div class="container section_6">
      <div>
        <img src="/images/hire-developers/rocket.svg" alt="rocket" />
      </div>
      <div>
        <p class="title">What ScrumLaunch does for you</p>
        <p class="description">
          Scrumlaunch is home to
          <span class="mark">top developers, designers, engineers,</span>
          coders, architects, and consultants. Companies choose to work with
          Scrumlaunch because our team has succeeded with all types of companies
          and projects, supporting business owners from idea to acquisition.
        </p>
      </div>
    </div>

    <div class="container section_7">
      <p>
        Trusted by over <span class="mark">200 clients</span> worldwide since
        2015
      </p>
      <div class="circle_container">
        <img src="/images/hire-developers/statistic_pc.svg" alt="statistic_1" />
        <img
          src="/images/hire-developers/statistic_tablet.svg"
          alt="statistic_2"
        />
      </div>
      <div class="btn_wrap">
        <NuxtLink to="/contact-us" class="btn on_dark_bg"
          >hire developers</NuxtLink
        >
      </div>
    </div>

    <div class="section_8">
      <IndustryLeadingResults />
    </div>

    <div class="container section_9">
      <p>frequently asked questions</p>

      <div class="faq">
        <div class="faq__item">
          <div class="faq__item__q">
            Why should I use ScrumLaunch to Hire {{ dev_lang }} Developers?
          </div>
          <div class="faq__item__img">
            <img src="/images/hire-developers/faq_1.svg" alt="faq_1" />
          </div>
          <div class="faq__item__a">
            At ScrumLaunch, we hire and train every member of our team
            individually. All dedicated {{ dev_lang }} developers (and any
            developer or designer, for that matter) undergo in-depth assessment
            and training to test for skill level, adaptability, creativity,
            system architecture, and other key components of software
            development. Our {{ dev_lang }} experts have worked on a range of
            projects from video analysis and machine learning to custom
            marketplaces.
          </div>
        </div>

        <div class="faq__item">
          <div class="faq__item__q">
            How Quickly can I hire {{ dev_lang }} developers through
            ScrumLaunch?
          </div>
          <div class="faq__item__img">
            <img src="/images/hire-developers/faq_2.svg" alt="faq_2" />
          </div>
          <div class="faq__item__a">
            Many of our clients have been up and running in under 24 hours.
            ScrumLaunch has the capacity to scale instantly and on-demand. If
            you already know what you’re building, then book a free consultation
            with our team to explain your {{ dev_lang }} requirements. We’ll
            match you with {{ dev_lang }} experts and a project manager on our
            team in a matter of hours.
          </div>
        </div>

        <!-- <div class="faq__item">
          <div class="faq__item__q">
            Is ScrumLaunch well-known for {{ dev_lang }}?
          </div>
          <div class="faq__item__img">
            <img src="/images/hire-developers/faq_3.svg" alt="faq_3" />
          </div>
          <div class="faq__item__a">
            {{ dev_lang }} is one of our primary development languages. Our team
            has a collective 600 years of development experience, and we’ve
            built incredibly complex projects in the language
          </div>
        </div> -->

        <div class="faq__item">
          <div class="faq__item__q">
            How Effective is Offshore or Outsourced {{ dev_lang }}?
          </div>
          <div class="faq__item__img">
            <img src="/images/hire-developers/faq_4.svg" alt="faq_4" />
          </div>
          <div class="faq__item__a">
            Offshore {{ dev_lang }} development is an incredibly cost-effecitve
            and efficient way to stand up new projects or build out existing
            ones. However, outsourcing {{ dev_lang }} development offshore
            should be done with a reputable firm that has a proven track record
            of success.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import DevelopersProfilesCards from '../../components/hire-developers/DevelopersProfilesCards.vue'
import IndustryLeadingResults from '../../components/home/IndustryLeadingResults.vue'
import Accordion from '../../components/accordion/Accordion.vue'
import MetricsCard from '../../components/hire-developers/MetricsCard.vue'

import Hero from '~/components/hire-developers/Hero.vue'
import OurClients from '~/components/hire-developers/OurClients.vue'

import dev_langs from '@/seo/development_languages.json'


const php_questions = [
  {
    number: 1,
    title: 'What is PHP?',
    description: [
      'PHP stands for Hypertext Preprocessor. It is an open source server-side scripting language which is widely used for web development. It supports many databases like MySQL, Oracle, Sybase, Solid, PostgreSQL, generic ODBC etc.',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'What is PEAR in PHP?',
    description: [
      'PEAR is a framework and repository for reusable PHP components. PEAR stands for PHP Extension and Application Repository. It contains all types of PHP code snippets and libraries.',
      "It also provides a command line interface to install 'packages' automatically.",
    ],
    list: [],
  },
  {
    number: 3,
    title: 'Explain the difference b/w static and dynamic websites?',
    description: [
      "In static websites, content can't be changed after running the script. You can't change anything on the site. It is predefined.",
      'In dynamic websites, content of script can be changed at the run time. Its content is regenerated every time a user visit or reload. Google, yahoo and every search engine is the example of dynamic website.',
    ],
    list: [],
  },
  {
    number: 4,
    title: 'What are the popular Content Management Systems (CMS) in PHP?',
    description: [
      'WordPress: WordPress is a free and open-source content management system (CMS) based on PHP & MySQL. It includes a plug-in architecture and template system. It is mostly connected with blogging but supports another kind of web content, containing more traditional mailing lists and forums, media displays, and online stores.',
      'Joomla: Joomla is a free and open-source content management system (CMS) for distributing web content, created by Open Source Matters, Inc. It is based on a model-view-controller web application framework that can be used independently of the CMS.',
      'Magento: Magento is an open source E-trade programming, made by Varien Inc., which is valuable for online business. It has a flexible measured design and is versatile with many control alternatives that are useful for clients. Magento utilizes E-trade stage which offers organization extreme E-business arrangements and extensive support network.',
      'Drupal: Drupal is a CMS platform developed in PHP and distributed under the GNU (General Public License).',
    ],
    list: [],
  },
  {
    number: 1,
    title: "What is 'echo' in PHP?",
    description: [
      'PHP echo outputs one or more strings. It is a language construct not a function. So the use of parentheses is not required. But if you want to pass more than one parameter to echo, the use of parentheses is required.',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'What is the difference between $message and $$message?',
    description: [
      '$message stores variable data while $$message is used to store a variable of variables',
      '$message stores fixed data whereas the data stored in $$message may be changed dynamically.',
    ],
    list: [],
  },
  {
    number: 3,
    title: 'Describe how the Laravel Framework works.',
    description: [
      'Laravel has diverse features such as template engine, MVC architecture support, top security, artisan tool, database migration system and etc. These Laravel advanced features make it better than other PHP frameworks. It provides benchmarked and feature-packed solutions for high-end web application development.',
    ],
    list: [],
  },
]

const ios_questions = [
  {
    number: 1,
    title: 'What is the difference between Struct and Class?',
    description: [''],
    list: [
      'One of the most important differences between structures and classes is that structures are value types and are always copied when they are passed around in your code, and classes are reference type and are passed by reference.',
      'Also, classes have Inheritance which allows one class to inherit the characteristics of another.',
      'Struct properties are stored on Stack and Class instances are stored on Heap hence, sometimes the stack is drastically faster than a class.',
      'Struct gets a default initializer automatically whereas in Class, we have to initialize.',
      'Struct is thread safe at any point of time.',
    ],
  },
  {
    number: 2,
    title: 'What is optional?',
    description: [
      'Optional is an Enum with 2 cases and one of the cases has an associated value attached to it. Some(Wrapped) and None.',
      'Optional is a type that can store a nil value. When it stores a value, it wraps around the value. To enclose a value in an optional parameter, you need to expand it.',
    ],
    list: [],
  },
  {
    number: 3,
    title: 'What are closures?',
    description: [
      'Standalone functions organized in blocks. They can be transferred and nested within each other. You can pass the closure as an argument to a function, or store it as a property of an object.Standalone functions organized in blocks. They can be transferred and nested within each other. You can pass the closure as an argument to a function, or store it as a property of an object.',
    ],
    list: [],
  },
  {
    number: 4,
    title: 'What is GCD?',
    description: [
      'Grand Central Dispatch (GCD) is a low-level API for managing concurrent operations provided by Apple. It can help improve your app’s responsiveness by deferring computationally expensive tasks to the background. It’s an easier concurrency model to work with than locks and threads.',
      'For example, if you want to fetch data from an API, you can use GCD to perform fetch tasks asynchronously.',
    ],
    list: [],
  },
  {
    number: 1,
    title: 'How is memory management handled in iOS?',
    description: [
      'Swift uses Automatic Reference Counting (ARC). This is conceptually the same thing in Swift as it is in Objective-C. ARC keeps track of strong references to instances of classes and increases or decreases their reference count accordingly when you assign or unassign instances of classes (reference types) to constants, properties, and variables. It deallocates memory used by objects whose reference count dropped to zero. ARC does not increase or decrease the reference count of value types because, when assigned, these are copied. By default, if you don’t specify otherwise, all the references will be strong references.',
    ],
    list: [],
  },
  {
    number: 2,
    title:
      'What do you know about singletons? Where would you use one and where would you not?',
    description: [
      'Singletons are sometimes considered to be an anti-pattern. There are multiple disadvantages to using singletons. The main ones are global state, object life-cycle, and dependency injection. When you have only one instance of something, it’s very tempting to reference and use it everywhere directly instead of injecting it into your objects. That leads to unnecessary coupling of concrete implementation in your code instead of working with an interface abstraction. Another malicious side effect of “convenient” singletons is the global state. Often singletons enable global state sharing and play the role of a “public bag” that every object uses to store state. That leads to unpredictable results and bugs or crashes when this uncontrolled state gets overridden or removed by someone.',
    ],
    list: [],
  },
  {
    number: 3,
    title: 'How do you manage dependencies?',
    description: [''],
    list: [
      'So far the most dominant and robust one is CocoaPods. I was built in the spirit of the Ruby Bundler gem and is a Ruby gem itself. The way it works is you install the gem, create Podfile in the root directory of your project, declare the pods (libraries) you want to use, and run pod install. That’s it.',
      'With Carthage, you create a dependencies declaration file called Cartfile but unlike Cocoapods you’d need to do Xcode project setup to make it work.',
      'Swift Package Manager is the future of dependency management for any Swift project but it only supports libraries and frameworks and cannot be used to generate iOS targets, although iOS targets can depend on modules built by SPM.',
    ],
  },
  {
    number: 4,
    title: 'What is the difference between stack and heap memory?',
    description: [
      'The stack is a simple first-in-first-out (FIFO) memory structure. The stack is always used to store the following two things: the reference portion of local variables and parameters of the reference type, and local variables and method parameters with a value type.',
      'Heap memory contains random non-lined objects stored in memory. The advantage is that it allows objects to be allocated or released in a random order. This will require you to use garbage collector functions to free memory. The heap stores the following: the contents of reference type objects.',
    ],
    list: [],
  },
]

const react_questions = [
  {
    number: 1,
    title: 'What is React? Share some of its key features.',
    description: [
      'React is a front-end JavaScript library that Facebook developed in the year 2013. It is used to create reusable UI by following the component-based approach. React is used to create complicated and interactive web and mobile user interfaces.',
      'Some of the key features of React are:',
    ],
    list: [
      'React makes use of virtual DOM instead of the regular or real DOM.',
      'React is used for server-side rendering.',
      'React has uni-directional or one-way data flow or data binding.',
    ],
  },
  {
    number: 2,
    title: 'Explain Virtual DOM in React?',
    description: [
      'Virtual DOM is an abstraction of the HTML DOM. It is lightweight and is not connected to the browser-specific implementation details. React provides Virtual DOM for free as the React Elements reside in virtual DOM.',
      'These elements make up the basic nodes of the Virtual DOM tree. Once the React Elements are defined, they can be rendered into the real DOM.',
      'Every time the state of React Component changes, React runs a diffing algorithm. It identifies what changes have been made in the virtual DOM. It then updates the DOM with the results of diff. This process is faster than it would be in real DOM.',
    ],
    list: [],
  },
  {
    number: 3,
    title: 'What is Redux?',
    description: [
      'A store in React is a simple JavaScript object. The idea behind Redux is to keep the state of the entire application in a single store, be it the state of the UI like which tab is active currently, or the state of Data like the user profile details.',
      'The state can be changed by firing actions from your application and then writing reducers for these actions that can modify the state. As the entire state of the application is in a single store it should not have any side effects.',
    ],
    list: [],
  },
  {
    number: 4,
    title: 'What is the difference between state and props?',
    description: [
      'The state is a data structure that starts with a default value when a component mounts. This data structure can be mutated over time as a result of user events.',
      'Props are short for properties and are the configuration of a Component. It is the way in which components communicate with each other.',
      'A component cannot change its props but puts together the props of its child component. The props of a component are received by the component above them, that is, the parent component and are immutable. Some components may have default props and they exist even if the parent component does not pass down props.',
      'Props and State are similar but their usage is different. The majority of components are usually Stateless. However, props are used to pass information or data from the parent to the child. Props are immutable and cannot be changed; however, State is used to mutate data and are useful for user input.',
    ],
    list: [],
  },
  {
    number: 1,
    title: 'What are the phases of a React component’s lifecycle?',
    description: [''],
    list: [
      'Initial rendering phase: In this phase, a component starts its life journey and makes its way to the DOM.',
      'Updating phase: When the component is added to the DOM it can update and re-render when its props or state changes. The changes can take place in this phase only.',
      'Unmounting phase: It is the final stage of the component. In this phase, the component is destroyed and removed from the lifecycle.',
    ],
  },
  {
    number: 2,
    title: 'What is CORS?',
    description: [
      'Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.',
    ],
    list: [],
  },
]

const kotlin_questions = [
  {
    number: 1,
    title: 'How does Kotlin work on Android?',
    description: [
      'Just like Java, the Kotlin code is also compiled into the Java bytecode and is executed at runtime by the Java Virtual Machine i.e. JVM. When a Kotlin file named Main.kt is compiled then it will eventually turn into a class and then the bytecode of the class will be generated. The name of the bytecode file will be MainKt.class and this file will be executed by the JVM',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'Why should we use Kotlin?',
    description: [''],
    list: [
      'Kotlin is concise',
      'Kotlin is null-safe',
      'Kotlin is interoperable',
    ],
  },
  {
    number: 3,
    title:
      'What is the difference between the variable declaration with val and const?',
    description: [
      'Both the variables that are declared with val and const are immutable in nature. But the value of the const variable must be known at the compile-time whereas the value of the val variable can be assigned at runtime also.',
    ],
    list: [],
  },
  {
    number: 4,
    title: 'How to ensure null safety in Kotlin?',
    description: [
      'One of the major advantages of using Kotlin is null safety. In Java, if you access some null variable then you will get a NullPointerException. So, the following code in Kotlin will produce a compile-time error:',
      'var name: String = "MindOrks"',
      'name = null //error',
      'So, to assign null values to a variable, you need to declare the name variable as a nullable string and then during the access of this variable, you need to use a safe call operator i.e. ?.',
      'var name: String? = "MindOrks"',
      'print(name?.length) // ok',
      'name = null // ok',
    ],
    list: [],
  },
  {
    number: 1,
    title: 'How to convert a Kotlin source file to a Java source file?',
    description: [
      'Steps to convert your Kotlin source file to Java source file:',
    ],
    list: [
      'Open your Kotlin project in the IntelliJ IDEA / Android Studio.',
      'Then navigate to Tools > Kotlin > Show Kotlin Bytecode.',
      'Now click on the Decompile button to get your Java code from the bytecode.',
    ],
  },
  {
    number: 2,
    title:
      'Can we use primitive types such as int, double, and float in Kotlin?',
    description: [
      "In Kotlin, we can't use primitive types directly. We can use classes like Int, Double, etc. as an object wrapper for primitives. But the compiled bytecode has these primitive types.",
    ],
    list: [],
  },
  {
    number: 3,
    title: 'What do you mean by destructuring in Kotlin?',
    description: [
      'Destructuring is a convenient way of extracting multiple values from data stored in(possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment). Sometimes it is convenient to destructure an object into a number of variables, for example:',
      'val (name, age) = developer',
      'Now, we can use name and age independently like below:',
      'println(name)',
      'println(age)',
    ],
    list: [],
  },
]

const python_questions = [
  {
    number: 1,
    title: 'What is Python? What are the benefits of using Python?',
    description: [
      'Python is a programming language with objects, modules, threads, exceptions, and automatic memory management. The benefits of pythons are that it is simple and easy, portable, extensible, build-in data structure, and it is open-source.',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'What is PEP 8?',
    description: [
      'PEP 8 is a coding convention, a set of recommendations, about how to write your Python code more readable.',
    ],
    list: [],
  },
  {
    number: 3,
    title: 'How is Python interpreted?',
    description: [
      'Python language is an interpreted language. Python programs run directly from the source code. They convert the source code that is written by the programmer into an intermediate language, which is translated into machine language that has to be executed.',
    ],
    list: [],
  },
  {
    number: 4,
    title:
      'What are the tools that help to find bugs or perform the static analysis?',
    description: [
      'PyChecker is a static analysis tool that detects bugs in Python source code and warns about the style and complexity of the bug. Pylint is another tool that verifies whether the module meets the coding standard.',
    ],
    list: [],
  },
  {
    number: 1,
    title: 'How are arguments passed by value or by reference?',
    description: [
      'Everything in Python is an object and all variables hold references to objects. The reference values are according to the functions. You cannot change the value of the references. However, you can change an object if it is mutable.',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'What is the difference between a list and a tuple?',
    description: [
      'The difference between a list and a tuple is that a list is mutable while a tuple is not. A tuple can be hashed, for example., as a key for dictionaries.',
    ],
    list: [],
  },
]

const node_questions = [
  {
    number: 1,
    title: 'What is Node.js? Where can you use it?',
    description: [
      'Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.',
      'Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use  I/O intensive web applications like video streaming sites. You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'Why use Node.js?',
    description: [
      'Node.js makes building scalable network programs easy. Some of its advantages include:',
    ],
    list: [
      'It is generally fast',
      'It rarely blocks',
      'It offers a unified programming language and data type',
      'Everything is asynchronous',
      'It yields great concurrency',
    ],
  },
  {
    number: 3,
    title:
      'If Node.js is single-threaded, then how does it handle concurrency?',
    description: [
      "The Multi-Threaded Request/Response Stateless Model is not followed by the Node JS Platform, and it adheres to the Single-Threaded Event Loop Model. The Node JS Processing paradigm is heavily influenced by the JavaScript Event-based model and the JavaScript callback system. As a result, Node.js can easily manage more concurrent client requests. The event loop is the processing model's beating heart in Node.js.",
    ],
    list: [],
  },
  {
    number: 4,
    title: 'How would you define the term I/O?',
    description: [''],
    list: [
      'The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to or from another medium',
      'Every transfer is an output from one medium and an input into another. The medium can be a physical device, network, or files within a system',
    ],
  },
  {
    number: 1,
    title: 'What is NPM?',
    description: [
      'NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.',
      'Node Package Manager provides two main functionalities:',
    ],
    list: [
      'Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org',
      'Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies',
    ],
  },
  {
    number: 2,
    title:
      'Why is Node.js preferred over other backend technologies like Java and PHP?',
    description: ['Some of the reasons why Node.js is preferred include:'],
    list: [
      'Node.js is very fast',
      'Node Package Manager has over 50,000 bundles available at the developer’s disposal',
      'Perfect for data-intensive, real-time web applications, as Node.js never waits for an API to return data',
      'Better synchronization of code between server and client due to same code base',
      'Easy for web developers to start using Node.js in their projects as it is a JavaScript library',
    ],
  },
]

const angular_questions = [
  {
    number: 1,
    title: 'What is Angular? What versions of Angular have you used?',
    description: [
      'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps. Angular is built entirely in TypeScript and uses it as a primary language. As it is a framework it has many useful built-in features like routing, forms, HTTP client, Internationalization (i18n), animations, and many more.',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'What is TypeScript?',
    description: [
      'TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular is built entirely in TypeScript and used as a primary language. You can install it globally.',
    ],
    list: [],
  },
  {
    number: 3,
    title:
      'What are Angular’s main concepts and the critical components of Angular? Also please say a few words about every component.',
    description: [
      'Component: The basic building block of an Angular application and is used to control HTML views.',
      'Modules: An Angular module contains basic building blocks like components, services, directives, etc. Using modules you can split your application into logical pieces where each piece performs a single task and is called a “module”.',
      'Templates: A template represents the view of an Angular application.',
      'Services: Services are used to create components that can be shared across the entire application. "Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. An Angular component should focus on presenting data and enabling the user experience. It should mediate between the application logic (data model) and the view (rendered by the template). Angular services help us to separate non-view-related functionality to keep component classes lean and efficient."',
      'Metadata: Metadata is used to add more data to an Angular class.',
    ],
    list: [],
  },
  {
    number: 4,
    title:
      'Can you explain various ways of component communication in Angular?',
    description: [''],
    list: [
      'Data sharing between parent and one or more child components using the @Input() and @Output() directives.',
      'Data sharing using an Angular service',
      'Using state management, like NgRx',
      'Read and write data to local storage',
      'Pass data via URL parameters',
    ],
  },
  {
    number: 1,
    title: 'What is the purpose of an async pipe?',
    description: [
      'The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes.',
    ],
    list: [],
  },
]

const other_questions = [
  {
    number: 1,
    title: 'What is meant by the term OOP?',
    description: [
      'OOPs refers to Object-Oriented Programming. It is the programming paradigm that is defined using objects. Objects can be considered as real-world instances of entities like class, that have some characteristics and behaviors.',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'What are some major Object Oriented Programming languages?',
    description: [
      'The programming languages that use and follow the Object-Oriented Programming paradigm or OOPs, are known as Object-Oriented Programming languages. Some of the major Object-Oriented Programming languages include:',
    ],
    list: ['Java', 'C++', 'Javascript', 'Python', 'PHP'],
  },
  {
    number: 3,
    title: 'What is meant by Structured Programming?',
    description: [
      'Structured Programming refers to the method of programming which consists of a completely structured control flow. Here structure refers to a block, which contains a set of rules, and has a definitive control flow, such as (if/then/else), (while and for), block structures, and subroutines.',
      'Nearly all programming paradigms include Structured programming, including the OOPs model.',
    ],
    list: [],
  },
  {
    number: 4,
    title: 'What is a class?',
    description: [
      'A class can be understood as a template or a blueprint, which contains some values, known as member data or member, and some set of rules, known as behaviors or functions. So when an object is created, it automatically takes the data and functions that are defined in the class.',
      'Therefore the class is basically a template or blueprint for objects. Also one can create as many objects as they want based on a class.',
      'For example, first, a car’s template is created. Then multiple units of car are created based on that template.',
    ],
    list: [],
  },
  {
    number: 1,
    title: 'What is an object?',
    description: [
      'An object refers to the instance of the class, which contains the instance of the members and behaviors defined in the class template. In the real world, an object is an actual entity to which a user interacts, whereas class is just the blueprint for that object. So the objects consume space and have some characteristic behavior.',
      'For example, a specific car.',
    ],
    list: [],
  },
  {
    number: 2,
    title: 'What is Polymorphism?',
    description: [
      'Polymorphism is composed of two words - “poly” which means “many”, and “morph” which means “shapes”. Therefore Polymorphism refers to something that has many shapes.',
      'In OOPs, Polymorphism refers to the process by which some code, data, method, or object behaves differently under different circumstances or contexts. Compile-time polymorphism and Run time polymorphism are the two types of polymorphisms in OOPs languages.',
    ],
    list: [],
  },
]

export default {
  components: {
    DevelopersProfilesCards,
    IndustryLeadingResults,
    Accordion,
    MetricsCard,
    lottie,
    Hero,
    OurClients
  },

  data() {
    return {
      dev_lang: '',
      questions: {
        PHP: php_questions,
        iOS: ios_questions,
        'React JS': react_questions,
        'Node JS': node_questions,
        'Agular JS': angular_questions,
        Python: python_questions,
        Kotlin: kotlin_questions,
        other: other_questions,
      },
    }
  },

  head() {
    return {
      title: `Hire ${this.dev_lang} Developers - Top Rated | ScrumLaunch`,
      meta: [
        {
          name: 'description',
          content: `Hire and scale ${this.dev_lang} developers with the best-in-class website development and design consulting firm. Book a free consultation now.`,
        },
      ],
    }
  },

  watch: {
    '$route.path'() {
      if (this.dev_lang) {
        this.dev_lang = this.getDevLang()
      }
    },
  },

  created() {
    this.dev_lang = this.getDevLang()
  },

  methods: {
    getDevLang() {
      return (
        dev_langs.filter((item) => {
          return this.$route.params.specialization === item.url
        })[0]?.lang || ''
      )
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.accordion_wrapper {
  border-bottom: 1px solid #1e1f21;
}

.on_white_bg {
  background: #12e2b0;
  color: #1e1f21;

  &:hover {
    background: #1e1f21;
    color: #ffffff;
  }
}

.developer {
  width: 142px;
  height: 142px;
  background: #ffffff;
  border: 1px solid #1e1f21;
  position: absolute;

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  &:nth-child(2) {
    top: 240px;
    right: 418px;

    @media screen and (max-width: 1439px) {
      top: 26%;
      right: 63%;
    }

    @media screen and (max-width: 768px) {
      top: 34%;
      right: 65%;
    }

    @media screen and (max-width: 425px) {
      top: 37%;
      right: 76%;
    }
  }

  &:nth-child(3) {
    top: 304px;
    right: 110px;

    @media screen and (max-width: 1439px) {
      top: 31%;
      right: 40%;
    }

    @media screen and (max-width: 768px) {
      top: 34%;
      right: 38%;
    }

    @media screen and (max-width: 425px) {
      top: 40%;
      right: 20%;
    }
  }

  &:nth-child(4) {
    top: 473px;
    right: 276px;

    @media screen and (max-width: 1439px) {
      top: 47%;
      right: 54%;
    }

    @media screen and (max-width: 768px) {
      top: 43%;
      right: 66%;
    }

    @media screen and (max-width: 425px) {
      top: 46%;
      right: 55%;
    }
  }

  &__image {
    border-bottom: 1px solid #1e1f21;
    width: 140px;
    height: 108px;
    object-fit: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
      width: 70px;
      height: 53px;
      background-size: 70px 53px;
    }

    &.first {
      background-image: url('/images/hire-developers/dev_1.png');
    }

    &.second {
      background-image: url('/images/hire-developers/dev_2.png');
    }

    &.third {
      background-image: url('/images/hire-developers/dev_3.png');
    }
  }

  &__name {
    padding: 8px 7px;
    font-weight: 700;
    font-size: 13px;
    line-height: 140%;

    @media screen and (max-width: 768px) {
      padding: 2px 4px;
      font-size: 8px;
    }
  }
}

.dev_map_tablet {
  display: none;

  @media screen and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 70px;

    & > img {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.hire_developers {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  text-align: left;
}

.section_1 {
  padding-top: 234px;
  background-image: url('/images/hire-developers/dev_map.svg');
  background-repeat: no-repeat;
  background-position: 120%;
  position: relative;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .desc {
    font-weight: 400;
    font-size: 26px;
    line-height: 150%;
    margin-bottom: 109px;
    max-width: 712px;
  }

  @media screen and (max-width: 1439px) {
    padding-top: 200px;
    background-image: none;

    .title {
      text-align: center;
      font-size: 32px;
      margin-bottom: 30px;
    }

    .flex {
      justify-content: center;
    }

    .desc {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 131px;

    .title {
      font-size: 56px;
      margin-bottom: 60px;
    }
  }
}

.section_2 {
  position: relative;
  padding-top: 146px;
  padding-bottom: 240px;

  & > h2 {
    text-align: center;
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    margin-bottom: 80px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1439px) {
    padding-top: 140px;
    padding-bottom: 200px;

    & > h2 {
      font-size: 48px;
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;

    & > h2 {
      font-size: 24px;
      margin-bottom: 40px;
    }
  }
}

.animation {
  position: absolute;
  top: -220px;
  right: 0;
  width: 600px;
  transform: rotate(77deg);
  z-index: -1;

  @media screen and (max-width: 1439px) {
    top: -187px;
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
  }
}

.section_3 {
  .title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    max-width: 700px;
    margin-bottom: 40px;

    @media screen and (max-width: 1439px) {
      font-size: 48px;
      margin-bottom: 24px;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 16px;
    }
  }

  .description {
    font-weight: 400;
    font-size: 26px;
    line-height: 150%;
    max-width: 712px;

    @media screen and (max-width: 1439px) {
      max-width: 100%;
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  .first_block {
    display: flex;
    align-items: center;
    position: relative;
  }

  .approach {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px 0;

    &__item {
      border: 1px solid #1e1f21;
      padding: 60px 40px;
      width: 400px;
      height: 416px;
    }

    &__item:not(:first-child) {
      border-left-width: 0px;
    }

    &__title {
      font-weight: 700;
      font-size: 30px;
      line-height: 140%;
      margin-top: 20px;
      margin-bottom: 16px;
    }

    &__desc {
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
    }

    &__icon {
      height: 70px;
    }

    @media screen and (max-width: 976px) {
      &__item {    height: 520px;}

      &__title {
      height: 68px;
    }
    }

    @media screen and (max-width: 1439px) {
      margin: 60px 0;
      overflow-x: auto;
      overflow-y: hidden;

      &__item {
        padding: 32px 24px;
        width: 100%;
        min-width: 200px;
        height: 500px;
      }

      &__title {
        font-size: 24px;
        margin-bottom: 12px;
      }

      &__icon {
        & > img {
          width: 36px;
          height: 36px;
        }
      }
    }

    @media screen and (max-width: 768px) {
      margin: 40px 0;

      justify-content: initial;
      overflow-x: hidden;
      flex-direction: column;
      gap: 15px;

      &__item {
        padding: 18px;
        width: 100%;
        min-width: 100%;
        height: auto;
      }

      &__item:not(:first-child) {
        border-left-width: 1px;
      }

      &__title {
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: 8px;
        max-width: 100%;
        height: auto;
      }

      &__desc {
        font-size: 14px;
      }

      &__icon {
        height: 45px;
        & > img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

.section_4 {
  margin-top: 240px;
  margin-bottom: 240px;

  .accordian_title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  .accordian_desc {
    max-width: 712px;
    font-weight: 400;
    font-size: 26px;
    line-height: 150%;
    margin-bottom: 80px;
  }

  .btn_wrap {
    margin-top: 66px;
    justify-content: center;
  }

  @media screen and (max-width: 1439px) {
    margin-top: 140px;
    margin-bottom: 140px;

    .accordian_title {
      font-size: 48px;
      margin-bottom: 24px;
    }

    .accordian_desc {
      font-size: 20px;
      margin-bottom: 60px;
    }

    .btn_wrap {
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;

    .accordian_title {
      font-size: 24px;
      margin-bottom: 16px;
    }

    .accordian_desc {
      font-size: 14px;
      margin-bottom: 40px;
    }

    .btn_wrap {
      margin-top: 40px;
      justify-content: center;
    }
  }
}

.section_5 {
  padding-top: 240px;
  padding-bottom: 240px;
  background: #1e1f21;

  .title {
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    color: #ffffff;
    margin-bottom: 80px;
    max-width: 780px;
    text-transform: uppercase;
  }

  .description {
    display: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
  }

  .statistic-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  .square {
    width: 300px;
    height: 300px;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    padding: 40px;
    flex-direction: column;
    color: #ffffff;

    .number {
      font-weight: 900;
      font-size: 30px;
      line-height: 140%;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .desc {
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
    }
  }

  .circle {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 50%;
  }

  @media screen and (max-width: 1439px) {
    padding-top: 140px;
    padding-bottom: 140px;

    .title {
      max-width: 540px;
      margin-bottom: 24px;
      font-size: 48px;
    }

    .description {
      display: block;
      color: #ffffff;
      margin-bottom: 60px;
    }

    .statistic-container {
      margin-bottom: 60px;
      flex-wrap: wrap;
    }

    .square {
      width: 354px;
      height: 356px;

      .number {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .desc {
        font-size: 16px;
      }
    }

    .circle {
      width: 355px;
      height: 355px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;

    .title {
      max-width: 100%;
      margin-bottom: 16px;
      font-size: 24px;
    }

    .description {
      font-size: 14px;
      margin-bottom: 40px;
    }

    .statistic-container {
      margin-bottom: 40px;
    }

    .square {
      width: 168px;
      height: 167px;
      padding: 18px;

      .number {
        font-size: 18px;
        margin-bottom: 6px;
      }

      .desc {
        font-size: 14px;
      }
    }

    .circle {
      width: 167px;
      height: 167px;
    }
  }
}

.section_6 {
  padding-top: 240px;
  padding-bottom: 240px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  .title {
    margin-bottom: 40px;
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
  }

  .description {
    font-weight: 400;
    font-size: 26px;
    line-height: 140%;
  }

  @media screen and (max-width: 1439px) {
    padding-top: 140px;
    padding-bottom: 140px;
    flex-direction: column-reverse;

    & > div > img {
      width: 368px;
      height: 289px;
    }

    .title {
      margin-bottom: 24px;
      font-size: 48px;
      max-width: 656px;
    }

    .description {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;

    & > div > img {
      width: 335px;
      height: 180px;
    }

    .title {
      margin-bottom: 16px;
      font-size: 24px;
      max-width: 100%;
    }

    .description {
      font-size: 14px;
    }
  }
}

.section_7 {
  text-align: center;
  background: #1e1f21;
  padding-top: 240px;
  padding-bottom: 240px;

  & > p {
    text-align: left;
    max-width: 1200px;
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 80px;
  }

  .circle_container {
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    & > img {
      max-width: 100%;
    }

    & > img:nth-child(2) {
      display: none;
    }
  }

  @media screen and (max-width: 1439px) {
    padding-top: 140px;
    padding-bottom: 140px;

    & > p {
      max-width: 708px;
      font-size: 48px;
      margin-bottom: 60px;
    }

    .circle_container {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;

    & > p {
      max-width: 322px;
      font-size: 24px;
      margin-bottom: 40px;
    }

    .circle_container {
      margin-bottom: 40px;

      & > img:nth-child(1) {
        display: none;
      }

      & > img:nth-child(2) {
        display: block;
      }
    }
  }
}

.section_8 {
  text-align: center;
}

.section_9 {
  margin-bottom: 260px;

  & > p {
    margin-bottom: 60px;
    font-weight: 900;
    font-size: 56px;
    line-height: 140%;
    text-transform: uppercase;
  }

  .faq {
    &__item {
      display: flex;
      padding-top: 50px;
      padding-bottom: 50px;
      border-top: 1px solid #1e1f21;
      align-items: center;

      &__q {
        width: 100%;
        min-width: 352px;
        max-width: 352px;
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        color: #1e1f21;
      }

      &__img {
        margin-left: 40px;
        margin-right: 60px;

        img {
          display: block;
        }
      }

      &__a {
        width: 100%;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: #1e1f21;

        .link {
          border-bottom: 2px solid #12e2b0;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 1439px) {
    margin-bottom: 140px;

    & > p {
      margin-bottom: 60px;
      font-size: 48px;
    }

    .faq {
      &__item {
        display: grid;
        grid-template-columns: 60px 1fr;
        padding: 32px 0;

        &__q {
          min-width: 100%;
          font-size: 24px;
          grid-area: 1 / 2 / 2 / 3;
        }

        &__img {
          grid-area: 1 / 1 / 2 / 2;
          margin: 0;

          img {
            width: 36px;
            height: 36px;
          }
        }

        &__a {
          margin-top: 20px;
          grid-area: 2 / 2 / 3 / 3;
          width: 100%;
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 80px;

    & > p {
      margin-bottom: 40px;
      font-size: 24px;
    }

    .faq {
      &__item {
        padding: 30px 0;

        &__q {
          min-width: 100%;
          font-size: 18px;
        }

        &__img {
          img {
            width: 24px;
            height: 24px;
          }
        }

        &__a {
          grid-area: 2 / 1 / 3 / 3;
          font-size: 12px;
        }
      }
    }
  }
}

// .container {
//   padding-left: 8.32%;
//   padding-right: 8.32%;
// }

.btn_wrap {
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    padding: 26px 64px;
    font-size: 20px;
    width: auto;
    height: 100%;
  }

  @media screen and (max-width: 1439px) {
    .btn {
      padding: 20px 50px;
      font-size: 14px;
    }
  }
}

.mark {
  background: #12e2b0;
  color: #1e1f21;
}
</style>
