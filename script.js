// --- DATABASE: 15 Articles (Unchanged, as per previous request) ---
const articles = {
    // Article 1 to 10: (COMPLETE)
    "article1": {
        title: "5 Simple Tricks to Speed Up Your Computer—You Won't Believe the Difference!",
        content: `<h3>👋 Hey There! Your PC is Slow, Right? Let's Fix It.</h3><p>I know the feeling. You click something, and then you wait... and wait. A slow computer wastes your time and frankly, it's super frustrating! The good news is, you don't need to buy a new one. We can fix almost every old computer slowdown with just five simple, free tricks. Let's dive in and get your PC running like new!</p><h3>1. The Big Cleanup: Get Rid of Digital Clutter</h3><p>Think of your computer like your closet. If it's stuffed with clothes (programs) you haven't worn in years, it's impossible to find anything! Same with software. Go to your **Control Panel** and look through the list of programs. If you don't use it, **uninstall it**. Seriously, just get rid of it. You'll instantly free up disk space and system resources.</p><h3>2. Tame the Startup Programs Beast</h3><p>Have you ever noticed how many apps pop up when your computer first boots? This slows down your startup time dramatically. Hit **Ctrl + Shift + Esc**, click the **"Startup"** tab, and **Disable** anything you don't need running immediately.</p><h3>3. Stop Treating Your Desktop Like a Filing Cabinet</h3><p>Your desktop isn't a storage drive; it’s a temporary launch pad. The solution is simple: **Move those big files into dedicated folders** on your D: or E: drive. Keep the desktop clean, and watch your speed improve.</p><h3>4. Use the Hidden Windows Tool: Disk Cleanup</h3><p>Windows builds up a ton of temporary files—it’s like dust collecting in the corners. Right-click your main drive (usually **C:**), go to **"Properties,"** and then click the **"Disk Cleanup"** button. This is a safe and quick way to recover Gigabytes of space.</p><h3>5. Check for the Hidden Enemy: Malware</h3><p>Sometimes, your slow computer isn't caused by clutter—it’s caused by a secret guest: **Malware or Viruses**. Make sure you have a reliable antivirus and run a **full system scan** at least once a month. Clean health means clean speed!</p><h3>🏁 Wrapping Up: You're Done!</h3><p>That’s it! If you follow these five steps, your old computer should feel significantly faster and more responsive. Remember, maintenance is key. Do a quick cleanup every few weeks, and your PC will stay happy and quick!</p>`
    },
    "article2": {
        title: "The Ultimate Guide to Mastering VLOOKUP in Excel",
        content: `<h3>Hello Data Wizard! What is VLOOKUP, Really?</h3><p>VLOOKUP (Vertical Look-up) is one of the most famous, or maybe infamous, formulas in Excel. Why? Because it’s incredibly powerful! Imagine you have a massive list of employee IDs in one sheet and need to find their salary from a different sheet. VLOOKUP does that search for you, automatically, in seconds.</p><h3>Breaking Down the 4 Simple Steps (Arguments)</h3><p>VLOOKUP looks intimidating, but it has only four parts: **lookup_value, table_array, col_index_num, [range_lookup]**.</p><ol><li>**lookup_value:** This is the item you have (e.g., the Employee ID number).</li><li>**table_array:** This is the whole range of the table where both your search item and the answer live.</li><li>**col_index_num:** Which column (counting from the left) has the information you want?</li><li>**range_lookup:** Almost always use **FALSE** (or 0). This means "Find an exact match."</li></ol><h3>Pro-Tip: When to Ditch VLOOKUP for XLOOKUP</h3><p>If you have a newer version of Excel (Microsoft 365), you should consider switching to **XLOOKUP**. It's much simpler, more flexible, and doesn't have the rule that your lookup value must be in the first column.</p><h3>Fixing the Infamous #N/A Error</h3><p>If your VLOOKUP returns **#N/A**, it means Excel couldn't find the exact match. Check for extra spaces (use **TRIM**), check the data type, and ensure the search column is the first in your selected range.</p>`
    },
    "article3": {
        title: "10 Essential Keyboard Shortcuts That Boost Productivity: Stop Clicking, Start Typing!",
        content: `<h3>Feeling Slow? Your Mouse is the Problem!</h3><p>If you're still relying on your mouse for every little task, you're wasting precious seconds! Keyboard shortcuts are the secret weapon of super-productive people. They keep your hands on the keys and your brain focused.</p><h3>The Universal Time Savers (Works Everywhere)</h3><ul><li>**Ctrl + Z (Undo):** The Magic "Undo" Button.</li><li>**Ctrl + Y (Redo):** If you Undo too much, use this to go forward again.</li><li>**Ctrl + C / Ctrl + V / Ctrl + X:** Copy, Paste, and Cut.</li><li>**Alt + Tab:** Switch between your open applications instantly.</li><li>**Ctrl + F:** Find Anything on a long webpage or document.</li></ul><h3>Browser Boss Shortcuts (For Chrome, Firefox, Edge)</h3><ul><li>**Ctrl + T:** New Tab.</li><li>**Ctrl + Shift + T:** The "Oops" Button. Accidentally closed a tab? This brings the *last* one back!</li><li>**Ctrl + W:** Close Current Tab.</li><li>**Ctrl + L:** Highlight the URL/Address Bar. Ready to type a new website address immediately.</li><li>**Ctrl + (Plus or Minus Key):** Zoom In or Out. **Ctrl + 0** resets the zoom.</li></ul>`
    },
    "article4": {
        title: "How to Choose the Right Laptop for Students: A Budget-Friendly Guide",
        content: `<h3>Choosing the Right Tool for the Job</h3><p>Buying a laptop for school or university can be tough! For most students, the goal is finding the perfect balance between **power, price, and portability**. Let’s break down the specs that actually matter for classes and assignments.</p><h3>1. The Budget Balancing Act</h3><p>You don't need to spend thousands! A solid student laptop usually falls in the **$400 to $800 range**. If you're only doing web research and writing documents, refurbished models are great. If you are studying coding or video editing, however, lean towards the higher end of that budget.</p><h3>2. Key Specs: Where to Spend Your Money</h3><ul><li>**RAM (8GB Minimum):** Aim for **8GB RAM** for smooth multitasking (like having 10 research tabs open while writing an essay).</li><li>**Storage (SSD is Mandatory):** **DO NOT buy a laptop with an HDD.** Look for an **SSD (Solid State Drive)**. Even 256GB is enough, as most large files can be stored in the cloud.</li><li>**CPU (i3/Ryzen 3 or Better):** The processor is the brain. Intel Core i3 or AMD Ryzen 3 are the minimum standard for basic classwork.</li></ul><h3>3. Portability and Battery Life</h3><p>A student laptop spends more time in a backpack than on a desk! Prioritize **weight** and **battery**. Look for laptops under **3.5 pounds** and with a rated battery life of **8 hours or more**.</p>`
    },
    "article5": {
        title: "Understanding Internet Speed: Mbps vs. MBps Explained",
        content: `<h3>Why Do My Speeds Never Match Up?</h3><p>You pay your ISP for 100 Mbps internet, but when you download a game, the speed indicator shows 10 MB/s. Confusing? The truth is, your ISP isn't lying; they are just using a slightly different measuring stick. The key is understanding the difference between a **bit (b)** and a **Byte (B)**.</p><h3>Bits (b) vs. Bytes (B): The Simple Math</h3><p>Internet companies use **bits** (Mbps) because the number looks much bigger. Your computer, however, uses **Bytes** (MBps) because that’s how it measures files.</p><ul><li>**bit (b):** A small unit of data. ISPs measure speed in **Megabits per second (Mbps)**.</li><li>**Byte (B):** A group of 8 bits. Files (movies, photos, software) are measured in **Megabytes (MB)**.</li></ul><h3>Calculating Your REAL Download Speed</h3><p>To find your true download speed, just take your advertised speed (in Mbps) and divide it by 8. If your plan is **100 Mbps**: 100 / 8 = **12.5 MB/s**.</p><h3>Pro-Tips to Fix Slow Wi-Fi Signal</h3><p>If your speeds are much lower than your calculated speed, your Wi-Fi signal might be weak. Try these: **Relocate the Router** to a central location, and use the **5 GHz network** for much faster speeds.</p>`
    },
    "article6": {
        title: "A Beginner's Guide to Web Hosting and Domains",
        content: `<h3>Starting Your Website: Hosting vs. Domain (A Simple Analogy)</h3><p>If you're new to making websites, the terms 'hosting' and 'domain' can sound complicated. Let's make it easy: think of a website as a house. The **Domain Name** (like Google.com) is the unique address that tells people where to find you. The **Web Hosting** is the actual land/plot of land where your house (website files) sits. You need both to be visible online!</p><h3>Choosing the Right Domain Name (.com, .org, etc.)</h3><p>Your domain name is your brand identity. Here are two quick tips: **Stick to .com** whenever possible, as it's the most trusted. Also, **Keep it Simple** by avoiding hyphens, numbers, or complicated spelling.</p><h3>Shared Hosting vs. VPS Hosting (Which is right for you?)</h3><p>For almost every beginner, **Shared Hosting** is the best choice because it's cheap and easy to manage. However, if your website grows huge (millions of visitors), you'll upgrade to **VPS (Virtual Private Server)**, which offers more dedicated resources and power.</p>`
    },
    "article7": {
        title: "Easy Ways to Fix Common Mobile Phone Battery Issues",
        content: `<h3>Why is My Battery Dying So Fast? (The Culprits)</h3><p>Is your phone battery percentage dropping like a stone? Usually, it's not the battery itself, but a few settings or habits. The main culprits are often **Background Apps** that constantly 'wake up' your phone, and a **Screen Brightness** that’s set way too high.</p><h3>Quick Fixes: Adjusting Settings for Longevity</h3><p>You can get hours more life out of your phone right now: **Reduce Screen Brightness** as this is the single biggest battery saver, and set your screen to lock after 30 seconds of inactivity to **Change Screen Timeout**.</p><ul><li>**Limit Background Refresh:** Go into your phone settings and turn off 'Background App Refresh' for apps you don't need real-time updates from.</li><li>**Turn Off Location Services:** For apps that don’t need your location 24/7 (like weather or camera), turn off their location access.</li></ul><h3>The Impact of Extreme Temperatures</h3><p>Your phone battery hates heat and extreme cold. **Never leave your phone in direct sunlight** on your car dashboard, and avoid charging it under a pillow, as high heat can permanently damage the battery’s lifespan.</p>`
    },
    "article8": {
        title: "Introduction to HTML: The Backbone of the Web",
        content: `<h3>What are HTML Tags, Really?</h3><p>If you want to understand websites, you have to start with **HTML** (HyperText Markup Language). Think of HTML as the **skeleton** of the website. It uses 'tags' like <code>&lt;p&gt;</code> (for paragraph) and <code>&lt;h1&gt;</code> (for the main title) to tell the browser how to structure the page.</p><h3>The Basic Document Structure (Head and Body)</h3><p>Every HTML page has two main parts: **The <code>&lt;head&gt;</code>** holds information for the browser (like the page's title) and **The <code>&lt;body&gt;</code>** is everything you actually see on the webpage—the text, images, buttons, and links.</p><h3>Creating Links and Images (The Fun Stuff)</h3><p>HTML is useless without links and images. The **Links (The <code>&lt;a&gt;</code> tag)** connect pages together, and the **Images (The <code>&lt;img&gt;</code> tag)** puts a picture on your page.</p><ul><li>Example Link: <code>&lt;a href="about.html"&gt;About Us&lt;/a&gt;</code></li><li>Example Image: <code>&lt;img src="logo.png" alt="Company Logo"&gt;</code></li></ul>`
    },
    "article9": {
        title: "Simple Steps to Secure Your Home Wi-Fi Network",
        content: `<h3>Why Security Matters (It's More Than Just Speed)</h3><p>Having a secure Wi-Fi network isn't just about stopping your neighbors from stealing your bandwidth. It’s about protecting your private data! An unsecured network is an open door for hackers to see what you're doing, and possibly steal passwords or banking details.</p><h3>1. Change Your Default Router Password (Immediately!)</h3><p>Every router comes with a default username and password (like admin/admin). Hackers know these! The very first thing you must do is log into your router settings (usually by typing 192.168.1.1 into your browser) and **change the main administration password** to something strong and unique.</p><h3>2. Using WPA3 Encryption (WPA2 Minimum)</h3><p>Encryption is the lock on your Wi-Fi signal. **You must use WPA2 or, ideally, WPA3.** WPA3 is the newest standard and provides military-grade security for your home network. Check your router settings today to ensure you’re using the highest setting available!</p><h3>3. Change Your Wi-Fi Password Regularly</h3><p>It sounds simple, but change your main Wi-Fi password every 6 to 12 months. This kicks off any devices you might have forgotten about and ensures only trusted users are on your network.</p>`
    },
    "article10": {
        title: "Troubleshooting: Why is My Printer Not Printing?",
        content: `<h3>The Printer is ON, But Nothing Happens! (The Classic Problem)</h3><p>Printers are notorious for being stubborn. You hit 'Print,' it makes noise, and then... nothing! Don't panic. 90% of printer problems are simple fixes that have nothing to do with the printer itself.</p><h3>1. Check the Cable and Power Connection (The Embarrassing Fix)</h3><p>Seriously, before you dive into software settings, check the physical connections. Is the USB cable securely plugged into the computer and the printer? Is the power cord completely in the wall socket? Sometimes the fix is that simple!</p><h3>2. Clearing the Print Queue (The Stuck Job)</h3><p>If you sent a corrupted document or the printer ran out of paper mid-job, the print queue gets "stuck." This stops all future jobs. You need to manually clear it: search for **"Printers & Scanners"**, select your printer, and **"Cancel"** or **"Delete"** any documents stuck in the queue.</p><h3>3. Updating or Reinstalling Printer Drivers</h3><p>Drivers are the little pieces of software that let your computer talk to your printer. If they are old or corrupted, your printer won't listen! Go to the printer manufacturer's website and download the newest driver for your specific model.</p>`
    },
    // Article 11 to 15: STRUCTURED TEMPLATES (NEEDS CONTENT)
    "article11": {
        title: "Best Practices for Managing Your Digital Photos",
        content: `<h3>The Digital Photo Overload (We all have it)</h3><p>We live in an age of constant photography, which means our hard drives and phones are full! It's easy to feel overwhelmed by thousands of unsorted pictures. The goal here is simple: to make your memories easy to find, share, and back up.</p><p>*** (Aapka Unique Content Yahan Likhna Shuru Karein) ***</p><h3>Cloud Storage Solutions (Google Photos, iCloud)</h3><p>Cloud storage is your friend for safety. **Focus on services that offer automatic syncing** so you don't have to manually upload new pictures. Choose a plan that offers enough storage for your collection and budget.</p><h3>Organizing Photos with Folders and Tags</h3><p>Folders should be named clearly (e.g., '2024 - Summer Vacation'). **Use tagging features** (if your software supports it) to categorize photos by people or events for ultra-fast searching later.</p>`
    },
    "article12": {
        title: "5 Free Software Tools Every Freelancer Needs",
        content: `<h3>Money Saving Tools for Your Solo Business</h3><p>Starting out as a freelancer can be expensive, but thankfully, the best tools don't always cost money. You need to be organized, communicate clearly, and get paid on time, all without breaking the bank. Here are five free tools that will instantly upgrade your professional workflow.</p><p>*** (Aapka Unique Content Yahan Likhna Shuru Karein) ***</p><h3>Project Management Tools (Trello/Asana)</h3><p>A good PM tool is essential for juggling deadlines. **Trello's board system** is excellent for visualizing tasks, while **Asana** is better for complex, multi-step projects with a team (even if your team is just you).</p><h3>Invoicing and Billing Software (Simple Free Options)</h3><p>Getting paid quickly requires a professional invoice. **Look for free invoicing apps** that allow you to track payment status and automatically calculate taxes if needed. Your invoice should always include your contact info and clear payment terms.</p>`
    },
    "article13": {
        title: "Understanding Computer RAM vs. Storage (Hard Drive)",
        content: `<h3>The Great Confusion: Are RAM and Storage the Same? (No!)</h3><p>This is one of the most common tech questions! People often confuse RAM size with hard drive size, but they are completely different. Think of your computer system as a desk and a filing cabinet: they serve different purposes but work together.</p><p>*** (Aapka Unique Content Yahan Likhna Shuru Karein) ***</p><h3>RAM: Short-Term Memory Explained</h3><p>RAM (Random Access Memory) is like your desk space. **The bigger the desk, the more programs (like Chrome, Photoshop, Word) you can run smoothly at the same time.** When you turn off the computer, RAM forgets everything that was on it.</p><h3>Storage: Long-Term Memory Explained</h3><p>Storage (SSD or HDD) is your filing cabinet. **This is where all your permanent files, photos, and the operating system itself are saved.** It keeps the data even when the power is off, and SSDs are exponentially faster than old HDDs.</p>`
    },
    "article14": {
        title: "Setting Up Your First Email Account (Gmail/Outlook)",
        content: `<h3>Email: Your Digital Passport</h3><p>In the digital world, an email address is more than just a way to send messages; it’s your main digital passport. You need it to log into services, apply for jobs, and communicate professionally. Setting it up correctly from the start is crucial for security.</p><p>*** (Aapka Unique Content Yahan Likhna Shuru Karein) ***</p><h3>Creating a Secure Password (The Most Important Step)</h3><p>Your password must be long and complex (at least 12 characters). **Never use the same password for your email that you use for banking or social media.** Use a mix of uppercase letters, lowercase letters, numbers, and symbols.</p><h3>Two-Factor Authentication Setup</h3><p>2FA (Two-Factor Authentication) is a must-have. **It makes sure that even if a hacker steals your password, they still cannot log in without the code sent to your physical phone.** Turn this on immediately in your security settings.</p>`
    },
    "article15": {
        title: "Common Smartphone Scams and How to Avoid Them",
        content: `<h3>Protecting Your Phone, Protecting Your Wallet</h3><p>Our smartphones hold our entire lives, making them a prime target for scammers. These criminals are always getting smarter, using convincing texts and calls to trick you into giving away personal information or money. Knowing their tricks is the best defense.</p><p>*** (Aapka Unique Content Yahan Likhna Shuru Karein) ***</p><h3>Phishing Texts (SMS Scams)</h3><p>Phishing texts often use urgent language (e.g., "Your bank account is locked! Click here to verify."). **Never click a link in a text message that asks for your password.** If you are worried, call the official company number directly.</p><h3>Fake Technical Support Calls</h3><p>Scammers will sometimes call pretending to be Microsoft or Apple, claiming your computer is infected. **Hang up immediately.** Microsoft and Apple will never randomly call you about your computer problems; they wait for you to call them.</p>`
    }
};

// --- DATABASE: Excel Formulas (50 Detailed + 200 Placeholders) ---
const formulas = {
    // 1-50: Detailed Formulas
    "SUM": { title: "SUM: The Basic Addition Formula", syntax: "=SUM(number1, [number2], ...)", description: "Adds all the numbers in a selected range of cells. This is the most fundamental formula for totaling values.", example: "=SUM(A1:A10) will add the values in cells A1 through A10." },
    "VLOOKUP": { title: "VLOOKUP: Vertical Data Search", syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])", description: "Searches for a value in the first column of a table array and returns a value in the same row from a specified column. Used for quickly matching data between two lists.", example: "=VLOOKUP(B2, A:C, 3, FALSE) searches for the value in B2 in column A and returns the value from column C." },
    "IF": { title: "IF: Conditional Logic Test", syntax: "=IF(logical_test, value_if_true, value_if_false)", description: "Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE. Excellent for creating simple decisions in your spreadsheet.", example: "=IF(C2>50, \"Pass\", \"Fail\") returns 'Pass' if the value in C2 is greater than 50, otherwise it returns 'Fail'." },
    "COUNTIF": { title: "COUNTIF: Count Cells Based on Criteria", syntax: "=COUNTIF(range, criteria)", description: "Counts the number of cells within a range that meet a given condition or criteria. Useful for simple statistical analysis.", example: "=COUNTIF(D2:D50, \">100\") counts how many cells in the range D2 to D50 have a value greater than 100." },
    "AVERAGE": { title: "AVERAGE: Calculating the Mean Value", syntax: "=AVERAGE(number1, [number2], ...)", description: "Returns the arithmetic mean of the arguments. It ignores text and logical values.", example: "=AVERAGE(B1:B20) calculates the average of all numbers from B1 to B20." },
    "MAX": { title: "MAX: Finding the Largest Value", syntax: "=MAX(number1, [number2], ...)", description: "Returns the largest numerical value in a set of values. Ignores logical values and text.", example: "=MAX(A:A) finds the largest value in the entire column A." },
    "MIN": { title: "MIN: Finding the Smallest Value", syntax: "=MIN(number1, [number2], ...)", description: "Returns the smallest numerical value in a set of values. Ignores logical values and text.", example: "=MIN(A1, B1, C1) finds the smallest value among the three cells." },
    "CONCATENATE": { title: "CONCATENATE (or CONCAT): Joining Text Strings", syntax: "=CONCATENATE(text1, [text2], ...)", description: "Joins two or more text strings into one string. Often replaced by the Ampersand (&) operator or the newer CONCAT function.", example: "=CONCATENATE(A2, \" \", B2) joins the content of A2 and B2 with a space in between (e.g., 'John' and 'Smith' become 'John Smith')." },
    "TODAY": { title: "TODAY: Displaying the Current Date", syntax: "=TODAY()", description: "Returns the current date formatted as a date. This function is volatile and updates every time the worksheet is calculated.", example: "=TODAY() displays today's date." },
    "TEXT": { title: "TEXT: Formatting Numbers as Text", syntax: "=TEXT(value, format_text)", description: "Converts a value to text in a specific number format. Useful when you need to combine numbers with text.", example: "=TEXT(A1, \"0.00%\") converts the number 0.5 to '50.00%'." },
    "INDEXMATCH": { title: "INDEX & MATCH: Advanced Lookup", syntax: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))", description: "A robust combination that looks up a value in one column and returns a value from another column, regardless of their position.", example: "=INDEX(C:C, MATCH(B2, A:A, 0)) searches for B2 in column A and returns the value from the same row in column C." },
    "SUMIF": { title: "SUMIF: Sum Based on Criteria", syntax: "=SUMIF(range, criteria, [sum_range])", description: "Calculates the sum of cells that meet a single specific criterion.", example: "=SUMIF(B:B, \">100\", C:C) sums column C only where the corresponding value in column B is greater than 100." },
    "PROPER": { title: "PROPER: Capitalize First Letter", syntax: "=PROPER(text)", description: "Capitalizes the first letter in a text string and any other letters in text that follow any character other than a letter.", example: "=PROPER(\"hello world\") returns 'Hello World'." },
    "LEFT": { title: "LEFT: Extract Characters from Left", syntax: "=LEFT(text, [num_chars])", description: "Returns the first character or characters from a text string, based on the number of characters you specify.", example: "=LEFT(A1, 5) returns the first 5 characters of the text in cell A1." },
    "RIGHT": { title: "RIGHT: Extract Characters from Right", syntax: "=RIGHT(text, [num_chars])", description: "Returns the last character or characters from a text string, based on the number of characters you specify.", example: "=RIGHT(A1, 5) returns the last 5 characters of the text in cell A1." },
    "TRIM": { title: "TRIM: Remove Extra Spaces", syntax: "=TRIM(text)", description: "Removes extra spaces from text, leaving only single spaces between words and no space at the start or end.", example: "=TRIM(\"  Hello World  \") returns 'Hello World'." },
    "ROUND": { title: "ROUND: Rounding Numbers", syntax: "=ROUND(number, num_digits)", description: "Rounds a number to a specified number of digits.", example: "=ROUND(4.567, 2) returns 4.57." },
    "NETWORKDAYS": { title: "NETWORKDAYS: Count Working Days", syntax: "=NETWORKDAYS(start_date, end_date, [holidays])", description: "Returns the number of whole working days between two dates (excluding weekends and optionally, specified holidays).", example: "=NETWORKDAYS(A1, B1) counts working days between the dates in A1 and B1." },
    "DATEDIF": { title: "DATEDIF: Calculate Date Difference", syntax: "=DATEDIF(start_date, end_date, unit)", description: "Calculates the number of days, months, or years between two dates. (Unit is 'Y' for years, 'M' for months, 'D' for days).", example: "=DATEDIF(A1, B1, \"Y\") returns the difference in full years between the two dates." },
    "ISERROR": { title: "ISERROR: Check for Errors", syntax: "=ISERROR(value)", description: "Checks whether a value is an error (#N/A, #VALUE!, #REF!, #DIV/0!, etc.) and returns TRUE or FALSE.", example: "=IF(ISERROR(A1/B1), \"Error\", A1/B1) returns 'Error' if the division results in an error." },
    "XLOOKUP": { title: "XLOOKUP: The Modern Lookup Function", syntax: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])", description: "Searches a range or an array, and returns the item corresponding to the first match it finds. It can return a match from any column and replaces VLOOKUP.", example: "=XLOOKUP(B2, A:A, C:C) searches B2 in column A and returns value from column C." },
    "FILTER": { title: "FILTER: Filter a Range of Data", syntax: "=FILTER(array, include, [if_empty])", description: "Filters a range of data based on criteria you define. A dynamic array function available in newer Excel versions.", example: "=FILTER(A2:C10, B2:B10=\"East\", \"No Results\") returns rows where column B equals 'East'." },
    "UNIQUE": { title: "UNIQUE: Extract Unique Values", syntax: "=UNIQUE(array, [by_col], [exactly_once])", description: "Returns a list of unique values from a range or array. Useful for generating unique lists from raw data.", example: "=UNIQUE(A2:A100) returns a list of unique names from column A." },
    "SWITCH": { title: "SWITCH: Multiple Condition Evaluation", syntax: "=SWITCH(expression, value1, result1, [value2, result2], ..., [default])", description: "Evaluates an expression against a list of values and returns the result corresponding to the first match. A cleaner alternative to nested IF statements.", example: "=SWITCH(A1, 1, \"Excellent\", 2, \"Good\", \"Poor\") returns 'Excellent' if A1 is 1, 'Good' if 2, and 'Poor' otherwise." },
    "IFS": { title: "IFS: Multiple Condition IFs", syntax: "=IFS(logical_test1, value_if_true1, [logical_test2, value_if_true2], ...)", description: "Checks multiple conditions and returns the value corresponding to the first true condition, simplifying complex IF logic.", example: "=IFS(B2>90, \"A\", B2>80, \"B\", B2>70, \"C\") checks multiple grading boundaries." },
    "AND": { title: "AND: Check Multiple Conditions", syntax: "=AND(logical1, [logical2], ...)", description: "Returns TRUE if all its arguments are TRUE; returns FALSE if one or more arguments are FALSE.", example: "=IF(AND(A1>10, B1<5), \"Yes\", \"No\") returns 'Yes' if both conditions are met." },
    "OR": { title: "OR: Check if Any Condition is True", syntax: "=OR(logical1, [logical2], ...)", description: "Returns TRUE if any argument is TRUE; returns FALSE if all arguments are FALSE.", example: "=IF(OR(A1=\"Late\", B1=\"Absent\"), \"Flag\", \"Clear\") flags a record if A1 is 'Late' OR B1 is 'Absent'." },
    "NOT": { title: "NOT: Reverses Logical Value", syntax: "=NOT(logical)", description: "Changes FALSE to TRUE, or TRUE to FALSE. Used to check for conditions that are *not* met.", example: "=IF(NOT(ISBLANK(A1)), \"Filled\", \"Empty\") returns 'Filled' if A1 is NOT blank." },
    "ISBLANK": { title: "ISBLANK: Check if Cell is Empty", syntax: "=ISBLANK(value)", description: "Returns TRUE if the value is empty, otherwise returns FALSE. Useful for data validation.", example: "=IF(ISBLANK(B2), \"Missing Data\", \"Data Present\") checks if B2 is empty." },
    "EOMONTH": { title: "EOMONTH: End of Month Date", syntax: "=EOMONTH(start_date, months)", description: "Returns the serial number for the last day of the month before or after a specified number of months.", example: "=EOMONTH(A1, 0) returns the last day of the month containing the date in A1." },
    "WORKDAY": { title: "WORKDAY: Calculate Future Working Date", syntax: "=WORKDAY(start_date, days, [holidays])", description: "Returns the date before or after a specified number of working days (excluding weekends and holidays).", example: "=WORKDAY(A1, 5) returns the date 5 working days after the date in A1." },
    "COUNTIFS": { title: "COUNTIFS: Multiple Criteria Counting", syntax: "=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2]...)", description: "Applies criteria to cells across multiple ranges and counts the number of times all criteria are met.", example: "=COUNTIFS(A:A, \">10\", B:B, \"<50\") counts rows where column A is >10 AND column B is <50." },
    "SUMIFS": { title: "SUMIFS: Multiple Criteria Summing", syntax: "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2]...)", description: "Adds the cells in a range that meet multiple criteria in multiple ranges.", example: "=SUMIFS(C:C, A:A, \"North\", B:B, \"Sales\") sums column C only where column A is 'North' AND column B is 'Sales'." },
    "AVERAGEIF": { title: "AVERAGEIF: Average Based on Criteria", syntax: "=AVERAGEIF(range, criteria, [average_range])", description: "Finds the average (arithmetic mean) of cells specified by a given criteria.", example: "=AVERAGEIF(A:A, \"Complete\", B:B) averages values in B:B where A:A is 'Complete'." },
    "RANK": { title: "RANK: Determine Rank in a List", syntax: "=RANK(number, ref, [order])", description: "Returns the rank of a number in a list of numbers. The rank is its size relative to other values in the list.", example: "=RANK(A1, A$1:A$100, 0) finds the rank of A1 among all values in the range (descending order)." },
    "INDIRECT": { title: "INDIRECT: Using Text as a Reference", syntax: "=INDIRECT(ref_text, [a1])", description: "Returns the reference specified by a text string. Useful for creating flexible dynamic formulas.", example: "=INDIRECT(\"A\"&B1) returns the value of the cell specified by concatenating 'A' and the number in B1." },
    "OFFSET": { title: "OFFSET: Dynamic Range Reference", syntax: "=OFFSET(reference, rows, cols, [height], [width])", description: "Returns a reference to a range that is a specified number of rows and columns from a cell or range of cells.", example: "=SUM(OFFSET(A1, 1, 1, 5, 5)) sums a 5x5 range starting from B2." },
    "SUBTOTAL": { title: "SUBTOTAL: Summary with Filters", syntax: "=SUBTOTAL(function_num, ref1, [ref2]...)", description: "Returns a subtotal in a list or database. Crucially, it only includes rows that are visible after filtering.", example: "=SUBTOTAL(9, A:A) returns the SUM of visible cells in column A." },
    "ROW": { title: "ROW: Get Row Number", syntax: "=ROW([reference])", description: "Returns the row number of a reference. If no reference is provided, it returns the row number of the cell where the formula is entered.", example: "=ROW() in cell B5 returns 5." },
    "COLUMN": { title: "COLUMN: Get Column Number", syntax: "=COLUMN([reference])", description: "Returns the column number of a reference. If no reference is provided, it returns the column number of the cell where the formula is entered.", example: "=COLUMN() in cell C1 returns 3." },
    "UPPER": { title: "UPPER: Convert Text to Uppercase", syntax: "=UPPER(text)", description: "Converts all letters in a text string to uppercase.", example: "=UPPER(\"hello\") returns 'HELLO'." },
    "LOWER": { title: "LOWER: Convert Text to Lowercase", syntax: "=LOWER(text)", description: "Converts all letters in a text string to lowercase.", example: "=LOWER(\"WORLD\") returns 'world'." },
    "REPLACE": { title: "REPLACE: Replace Text by Position", syntax: "=REPLACE(old_text, start_num, num_chars, new_text)", description: "Replaces a part of a text string with a different text string, based on the number of characters you specify.", example: "=REPLACE(\"Example\", 3, 4, \"cell\") returns 'Excell'." },
    "SUBSTITUTE": { title: "SUBSTITUTE: Replace Text by Content", syntax: "=SUBSTITUTE(text, old_text, new_text, [instance_num])", description: "Substitutes new_text for old_text in a text string. Useful for replacing specific words.", example: "=SUBSTITUTE(A1, \"old\", \"new\") replaces all occurrences of 'old' with 'new' in A1." },
    "FIND": { title: "FIND: Find One Text String within Another (Case Sensitive)", syntax: "=FIND(find_text, within_text, [start_num])", description: "Finds one text value within another text value. FIND is case-sensitive.", example: "=FIND(\"e\", \"Excel\") returns 2." },
    "SEARCH": { title: "SEARCH: Find One Text String within Another (Case Insensitive)", syntax: "=SEARCH(find_text, within_text, [start_num])", description: "Finds one text value within another text value. SEARCH is **not** case-sensitive.", example: "=SEARCH(\"e\", \"Excel\") returns 1." },
    "LEN": { title: "LEN: Count Characters in Text", syntax: "=LEN(text)", description: "Returns the number of characters in a text string.", example: "=LEN(\"Hello\") returns 5." },
    "MID": { title: "MID: Extract Text from the Middle", syntax: "=MID(text, start_num, num_chars)", description: "Returns a specific number of characters from a text string, starting at the position you specify.", example: "=MID(\"Formula\", 3, 3) returns 'rmu'." },
    "PI": { title: "PI: Returns the Value of Pi", syntax: "=PI()", description: "Returns the value of Pi (3.14159265358979) accurate to 15 digits.", example: "=PI()" },
    "SQRT": { title: "SQRT: Square Root", syntax: "=SQRT(number)", description: "Returns the positive square root of a number.", example: "=SQRT(25) returns 5." },
    "POWER": { title: "POWER: Exponentiation", syntax: "=POWER(number, power)", description: "Returns the result of a number raised to a power.", example: "=POWER(2, 3) returns 8 (2 cubed)." },
    "ABS": { title: "ABS: Absolute Value", syntax: "=ABS(number)", description: "Returns the absolute value (magnitude) of a number, a number without its sign.", example: "=ABS(-10) returns 10." },
    "MOD": { title: "MOD: Remainder After Division", syntax: "=MOD(number, divisor)", description: "Returns the remainder after the number argument is divided by the divisor argument.", example: "=MOD(10, 3) returns 1." },
    "INT": { title: "INT: Round Down to Nearest Integer", syntax: "=INT(number)", description: "Rounds a number down to the nearest integer.", example: "=INT(4.9) returns 4." },
    "TRUNC": { title: "TRUNC: Truncate to Integer", syntax: "=TRUNC(number, [num_digits])", description: "Truncates a number to an integer by removing the fractional part. Unlike INT, it doesn't round based on the sign.", example: "=TRUNC(-4.9) returns -4." },
    "LARGE": { title: "LARGE: Find the K-th Largest Value", syntax: "=LARGE(array, k)", description: "Returns the k-th largest value in a data set. Use k=1 for MAX, k=2 for the second largest, etc.", example: "=LARGE(A1:A10, 2) returns the second largest value in the range." },
    "SMALL": { title: "SMALL: Find the K-th Smallest Value", syntax: "=SMALL(array, k)", description: "Returns the k-th smallest value in a data set. Use k=1 for MIN, k=2 for the second smallest, etc.", example: "=SMALL(A1:A10, 2) returns the second smallest value in the range." },
    "TRANSPOSE": { title: "TRANSPOSE: Rotate Rows to Columns", syntax: "=TRANSPOSE(array)", description: "Returns a vertical range of cells as a horizontal range, or vice versa (swaps rows and columns).", example: "=TRANSPOSE(A1:C1) returns the values in a 1x3 range as a 3x1 range." },
    // 51-250: Placeholders
    "HLOOKUP": { title: "HLOOKUP", isPlaceholder: true }, "LOOKUP": { title: "LOOKUP", isPlaceholder: true }, "CHOOSE": { title: "CHOOSE", isPlaceholder: true }, "MATCH": { title: "MATCH", isPlaceholder: true }, "ADDRESS": { title: "ADDRESS", isPlaceholder: true }, "HYPERLINK": { title: "HYPERLINK", isPlaceholder: true }, "CEILING": { title: "CEILING", isPlaceholder: true }, "FLOOR": { title: "FLOOR", isPlaceholder: true }, "ROUNDUP": { title: "ROUNDUP", isPlaceholder: true }, "ROUNDDOWN": { title: "ROUNDDOWN", isPlaceholder: true },
    "COUNT": { title: "COUNT", isPlaceholder: true }, "COUNTA": { title: "COUNTA", isPlaceholder: true }, "COUNTBLANK": { title: "COUNTBLANK", isPlaceholder: true }, "AVERAGEIFS": { title: "AVERAGEIFS", isPlaceholder: true }, "MEDIAN": { title: "MEDIAN", isPlaceholder: true }, "MODE": { title: "MODE", isPlaceholder: true }, "STDEV": { title: "STDEV", isPlaceholder: true }, "VAR": { title: "VAR", isPlaceholder: true }, "DCOUNT": { title: "DCOUNT", isPlaceholder: true }, "DSUM": { title: "DSUM", isPlaceholder: true },
    "DATE": { title: "DATE", isPlaceholder: true }, "TIME": { title: "TIME", isPlaceholder: true }, "YEAR": { title: "YEAR", isPlaceholder: true }, "MONTH": { title: "MONTH", isPlaceholder: true }, "DAY": { title: "DAY", isPlaceholder: true }, "HOUR": { title: "HOUR", isPlaceholder: true }, "MINUTE": { title: "MINUTE", isPlaceholder: true }, "SECOND": { title: "SECOND", isPlaceholder: true }, "EDATE": { title: "EDATE", isPlaceholder: true }, "WEEKDAY": { title: "WEEKDAY", isPlaceholder: true },
    "ISNUMBER": { title: "ISNUMBER", isPlaceholder: true }, "ISTEXT": { title: "ISTEXT", isPlaceholder: true }, "ISLOGICAL": { title: "ISLOGICAL", isPlaceholder: true }, "ISNONTEXT": { title: "ISNONTEXT", isPlaceholder: true }, "NA": { title: "NA", isPlaceholder: true }, "ERROR.TYPE": { title: "ERROR.TYPE", isPlaceholder: true }, "IFERROR": { title: "IFERROR", isPlaceholder: true }, "IFNA": { title: "IFNA", isPlaceholder: true }, "FORMULATEXT": { title: "FORMULATEXT", isPlaceholder: true }, "TYPE": { title: "TYPE", isPlaceholder: true },
    // Add 180 more placeholders to reach 250
    ...Array(180).fill(0).reduce((acc, _, i) => {
        const formulaName = `FORMULA_${i + 51}`;
        acc[formulaName] = { title: formulaName, isPlaceholder: true };
        return acc;
    }, {})
};

// --- Static Pages Content (Unchanged) ---
const pages = {
    "about": {
        title: "About Our Mission",
        content: `<h3>Our Goal: Simple Tech for Everyone</h3><p>We believe that technology should be easy to understand, not complicated. Our team is dedicated to breaking down complex topics—from coding basics to Excel formulas—into simple, natural, and helpful guides.</p><p>We are committed to providing original, high-value content that truly helps you solve problems and learn new skills.</p><h3>Why Trust Us?</h3><p>Every article is researched and written with the absolute beginner in mind. We skip the jargon and focus on practical steps you can use immediately.</p>`
    },
    "contact": {
        title: "Contact Us",
        content: `<h3>Get In Touch</h3><p>We love hearing from our readers! Whether you have a question about an article, a suggestion for a new topic, or just want to say hello, feel free to reach out.</p><h4>Email</h4><p>For all inquiries, please email us at: <a href="mailto:support@yourdomain.com">samishahi.pk@gmail.com</a></p><h4>Business Hours</h4><p>We typically respond to emails within 24-48 hours during standard business days (Monday - Friday).</p><p>Thank you for visiting!</p>`
    },
    "privacy": {
        title: "Privacy Policy",
        content: `<h3>Your Privacy is Important</h3><p>This Privacy Policy outlines how [Your Site Name] collects, uses, maintains, and discloses information collected from users (each, a "User") of the website. We are committed to protecting your personal information.</p><h4>Personal Identification Information</h4><p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name and email address.</p><h4>Web Browser Cookies and AdSense</h4><p>Our Site may use "cookies" to enhance User experience. AdSense, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet.</p><p>We strongly recommend reviewing Google's advertising policies for full details.</p>`
    }
};

// --- Globals ---
let currentCalendarMonth, currentCalendarYear;
let occasionData = [
    // Example data
    { date: "2025-11-20", name: "Pakistan Resolution Day (Example)", isUpcoming: true, type: 'manual' },
    { date: "2025-11-25", name: "Upcoming Test Event (Example)", isUpcoming: true, type: 'manual' },
]; 
let gameInterval; 
let gameFrameRequest; 


// --- 1. Clock Logic (Unchanged) ---
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('digital-clock').textContent = timeString;

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('country-detail').textContent = timeZone;
}
setInterval(updateClock, 1000);


// --- 2. Calendar Logic (FIXED: Added Search Integration) ---

// Placeholder for search function, implemented using the tool
async function searchOccasions() {
    const searchInput = document.getElementById('occasion-search-input').value.trim();
    const statusDisplay = document.getElementById('search-status');
    statusDisplay.classList.remove('error');
    statusDisplay.textContent = "Searching for occasions online... Please wait.";

    if (!searchInput) {
        statusDisplay.textContent = "Please enter a search term (e.g., Pakistan Holidays November 2025).";
        statusDisplay.classList.add('error');
        return;
    }

    try {
        const response = await google.search({ queries: [`${searchInput} official public holidays and observances`] });
        const rawResult = response.result;
        
        if (!rawResult) {
            statusDisplay.textContent = `No detailed results found for "${searchInput}". Try a different query.`;
            statusDisplay.classList.add('error');
            return;
        }

        // Simple text parsing to extract possible dates and events.
        const lines = rawResult.split('\n');
        const searchResults = [];
        const today = new Date();
        const yearMatch = rawResult.match(/\d{4}/);
        const searchYear = yearMatch ? parseInt(yearMatch[0]) : today.getFullYear();

        // 1. Clear previous search results from occasionData (keep manual entries)
        occasionData = occasionData.filter(o => o.type === 'manual');

        // 2. Simple regex to find dates and names (e.g., Nov 20: Event Name)
        const dateEventRegex = /(\w{3,4}\s\d{1,2})[:\-\s]+(.+)/g;
        
        let match;
        while ((match = dateEventRegex.exec(rawResult)) !== null) {
            try {
                const datePart = match[1].trim(); // e.g., 'Nov 20'
                const namePart = match[2].trim().split('|')[0].trim(); // Split by common separator
                
                // Attempt to construct a full date string for parsing
                let fullDateString = `${datePart} ${searchYear}`;
                let dateObj = new Date(fullDateString);
                
                // Fallback/Correction for dates that might span across month boundaries (basic check)
                if (dateObj.toString() === 'Invalid Date') {
                    // Try current calendar month
                    fullDateString = `${datePart} ${currentCalendarYear}`;
                    dateObj = new Date(fullDateString);
                }

                if (dateObj.toString() !== 'Invalid Date') {
                    const dateString = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
                    
                    const isUpcoming = dateObj.setHours(0,0,0,0) >= today.setHours(0,0,0,0);
                    
                    if (!occasionData.some(o => o.date === dateString)) {
                        occasionData.push({
                            date: dateString,
                            name: namePart,
                            isUpcoming: isUpcoming,
                            type: 'search',
                            source: rawResult.substring(0, 200) + '...'
                        });
                    }
                }
            } catch (e) {
                console.error("Date parsing error for a result line:", e);
            }
        }
        
        if (occasionData.filter(o => o.type === 'search').length > 0) {
            statusDisplay.textContent = `Found ${occasionData.filter(o => o.type === 'search').length} occasions related to "${searchInput}" and highlighted on the calendar.`;
        } else {
             statusDisplay.textContent = `Search successful, but no specific dates/events found in the results. Try another query like 'Pakistan public holidays'.`;
             statusDisplay.classList.add('error');
        }
        
    } catch (error) {
        statusDisplay.textContent = "An API error occurred during search. Please try again or refine your query.";
        statusDisplay.classList.add('error');
        console.error("Search API Error:", error);
    }
    
    // Re-render the calendar to show new search results
    renderCalendar(currentCalendarYear, currentCalendarMonth);
}


function renderCalendar(year, month) {
    const today = new Date();
    currentCalendarMonth = month !== undefined ? month : today.getMonth();
    currentCalendarYear = year !== undefined ? year : today.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = ''; 
    
    document.getElementById('calendar-title').textContent = `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;
    
    const firstDayOfMonth = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();
    const daysInMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        let weekCompleted = true;

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDayOfMonth) {
                cell.textContent = '';
            } else if (date > daysInMonth) {
                cell.textContent = '';
            } else {
                cell.textContent = date;
                const dateString = `${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                
                cell.setAttribute('data-date', dateString);
                
                // Highlight today
                if (date === today.getDate() && currentCalendarMonth === today.getMonth() && currentCalendarYear === today.getFullYear()) {
                    cell.classList.add('today');
                }

                // Highlight Occasions for the current month/year
                const monthYearDateString = `${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                const occasionsOnDate = occasionData.filter(o => o.date === monthYearDateString);
                
                if (occasionsOnDate.length > 0) {
                    const primaryOccasion = occasionsOnDate[0];
                    const isUpcoming = primaryOccasion.isUpcoming;
                    
                    cell.classList.add('occasion');
                    cell.classList.add(isUpcoming ? 'upcoming-occasion' : 'past-occasion');
                    cell.classList.add(primaryOccasion.type === 'search' ? 'search-occasion' : 'manual-occasion');

                    cell.onclick = () => openOccasionModal(occasionsOnDate, dateString);
                } else {
                    cell.onclick = null;
                    cell.classList.remove('occasion', 'upcoming-occasion', 'past-occasion', 'search-occasion', 'manual-occasion');
                }

                date++;
                weekCompleted = false; 
            }
            row.appendChild(cell);
        }

        if (!weekCompleted || date > daysInMonth) {
            calendarBody.appendChild(row);
        }
        if (date > daysInMonth) break;
    }
}

function changeMonth(delta) {
    let newMonth = currentCalendarMonth + delta;
    let newYear = currentCalendarYear;

    if (newMonth < 0) {
        newMonth = 11;
        newYear--;
    } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
    }
    renderCalendar(newYear, newMonth);
}

function addManualOccasion() {
    const dateInput = document.getElementById('occasion-date-input').value.trim();
    const nameInput = document.getElementById('occasion-name-input').value.trim();
    const statusDisplay = document.getElementById('occasion-status');
    statusDisplay.classList.remove('error');

    // Simple date validation (YYYY-MM-DD format)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateInput) || !nameInput) {
        statusDisplay.textContent = "Please enter a valid date (YYYY-MM-DD) and occasion name.";
        statusDisplay.classList.add('error');
        return;
    }
    
    // Check if date is valid
    const checkDate = new Date(dateInput);
    if (isNaN(checkDate)) {
         statusDisplay.textContent = "Invalid date format or value.";
         statusDisplay.classList.add('error');
         return;
    }
    
    const today = new Date();
    const isUpcoming = checkDate.setHours(0,0,0,0) >= today.setHours(0,0,0,0);

    const newOccasion = {
        date: dateInput,
        name: nameInput,
        isUpcoming: isUpcoming,
        type: 'manual'
    };
    
    // Replace existing manual occasion on the same date if it exists
    occasionData = occasionData.filter(o => o.date !== dateInput || o.type !== 'manual');
    occasionData.push(newOccasion);

    statusDisplay.textContent = `Occasion '${nameInput}' added/updated for ${dateInput}.`;
    
    // Re-render only if the date falls in the currently viewed month/year
    const [year, month] = dateInput.split('-').map(Number);
    if (year === currentCalendarYear && month - 1 === currentCalendarMonth) {
        renderCalendar(currentCalendarYear, currentCalendarMonth);
    }
    
    // Clear inputs after successful add
    document.getElementById('occasion-date-input').value = '';
    document.getElementById('occasion-name-input').value = '';
}


function openOccasionModal(occasions, dateString) {
    const modal = document.getElementById('occasion-modal-overlay');
    document.getElementById('occasion-modal-title').textContent = `Occasions on ${new Date(dateString).toDateString()}`;
    
    let contentHTML = '';
    
    occasions.forEach(occasion => {
        const sourceText = occasion.type === 'search' ? 'Source: Online Search' : 'Source: Manually Added';
        const color = occasion.isUpcoming ? '#55ff55' : '#ff5555';
        
        contentHTML += `
            <div style="margin-bottom: 15px; padding: 10px; border-left: 5px solid ${color}; background-color: #2a2a2a; border-radius: 4px;">
                <p><strong>Event Name:</strong> ${occasion.name}</p>
                <p style="color: ${color};"><strong>Status:</strong> ${occasion.isUpcoming ? 'Upcoming Event' : 'Past Event'}</p>
                <p style="font-size: 0.85em; color: #888;">${sourceText}</p>
                ${occasion.type === 'search' && occasion.source ? `<p style="font-size: 0.8em; color: #666; margin-top: 5px;">*Raw Info Snippet: ${occasion.source}</p>` : ''}
            </div>
        `;
    });
    
    document.getElementById('occasion-modal-content').innerHTML = contentHTML;
    modal.classList.remove('hidden');
}

function closeOccasionModal() {
    document.getElementById('occasion-modal-overlay').classList.add('hidden');
}


// --- 3. Formula List Generation (Unchanged) ---
function generateFormulaList() {
    const listContainer = document.getElementById('formula-list');
    listContainer.innerHTML = '';
    
    Object.keys(formulas).forEach(key => {
        const formula = formulas[key];
        const item = document.createElement('div');
        item.classList.add('formula-item');
        item.textContent = formula.title;
        
        if (formula.isPlaceholder) {
            item.classList.add('placeholder');
            item.title = "Placeholder: Content Not Yet Added";
        } else {
            item.setAttribute('onclick', `openFormulaModal('${key}')`);
        }
        listContainer.appendChild(item);
    });
}

// --- 4. Navigation and Modal Logic (Unchanged) ---
function stopAllGames() {
    if (gameInterval) clearInterval(gameInterval);
    if (gameFrameRequest) cancelAnimationFrame(gameFrameRequest);
    rightPressed = false; 
    leftPressed = false;
    // Remove maze key listener when switching away from maze
    document.removeEventListener("keydown", handleMazeMovement, false);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeLink = document.querySelector(`.menu a[href="#${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    stopAllGames(); 

    if (pageId === 'calendar') {
        renderCalendar();
    } else if (pageId === 'excel') {
        generateFormulaList();
    } else if (pageId === 'games') {
        showGame('tictactoe'); 
    }
}

function openArticleModal(articleId) {
    const article = articles[articleId];
    if (article) {
        const modal = document.getElementById('modal-overlay');
        document.getElementById('modal-title').innerHTML = article.title;
        document.getElementById('modal-content').innerHTML = article.content;
        
        modal.classList.add('full-screen');
        modal.classList.remove('hidden');
    } else {
        openModal("Error", "Article content not found.");
    }
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.add('hidden');
    modal.classList.remove('full-screen');
}

function openPageModal(pageId) {
    const page = pages[pageId];
    if (page) {
        const modal = document.getElementById('modal-overlay');
        document.getElementById('modal-title').innerHTML = page.title;
        document.getElementById('modal-content').innerHTML = page.content;
        
        modal.classList.remove('full-screen');
        modal.classList.remove('hidden');
    } else {
        openModal("Error", "Page content not found.");
    }
}

function openFormulaModal(formulaKey) {
    const formula = formulas[formulaKey];
    if (formula && !formula.isPlaceholder) {
        document.getElementById('formula-modal-title').textContent = formula.title;
        document.getElementById('formula-syntax').textContent = formula.syntax;
        document.getElementById('formula-description').textContent = formula.description;
        document.getElementById('formula-example').textContent = formula.example;
        
        document.getElementById('copy-formula-btn').onclick = () => {
            navigator.clipboard.writeText(formula.syntax);
            alert(`Formula copied: ${formula.syntax}`);
        };

        document.getElementById('formula-modal-overlay').classList.remove('hidden');
    }
}

function closeFormulaModal() {
    document.getElementById('formula-modal-overlay').classList.add('hidden');
}


// --- 5. Games Logic (Updated Maze Game) ---

function showGame(gameId) {
    stopAllGames(); 

    document.querySelectorAll('.game-content').forEach(game => {
        game.classList.remove('active');
    });
    document.getElementById(gameId).classList.add('active');

    document.querySelectorAll('.game-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.game-tab[onclick="showGame('${gameId}')"]`).classList.add('active');

    switch(gameId) {
        case 'tictactoe':
            handleRestartGame();
            break;
        case 'maze-game':
            initMazeGame(); // Initializes the *random* maze
            break;
        case 'brick-breaker':
            initBrickBreaker();
            break;
        case 'snake':
            initSnakeGame(); 
            break;
        case 'memory':
            initMemoryGame(); 
            break;
    }
}

// 5a. Tic-Tac-Toe Game State (Working)
let board, currentPlayer, gameActive;
const cells = document.querySelectorAll('#tictactoe-board .cell');
const statusDisplay = document.getElementById('tictactoe-status');
const winningConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

function computerTurn() {
    if (!gameActive) return;
    const availableCells = Array.from(board).map((val, idx) => (val === '' ? idx : null)).filter(idx => idx !== null);

    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const moveIndex = availableCells[randomIndex];
        const cellElement = document.querySelector(`#tictactoe-board .cell[data-index="${moveIndex}"]`);
        
        setTimeout(() => {
            handleCellClick({ target: cellElement, isAI: true });
        }, 500); 
    }
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') continue;
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer === 'X' ? 'Guest' : 'Computer'} has won! 🎉`;
        gameActive = false;
        return true;
    }
    if (!board.includes('')) {
        statusDisplay.textContent = `Game ended in a draw! 🤷‍♂️`;
        gameActive = false;
        return true;
    }
    return false;
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
    const isAI = event.isAI || false;

    if (board[clickedCellIndex] !== '' || !gameActive) return;

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer === 'X' ? 'player-x' : 'player-o');

    if (handleResultValidation()) return; 

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer === 'X' ? 'Guest' : 'Computer'}'s turn`;

    if (currentPlayer === 'O' && !isAI) {
        computerTurn();
    }
}

function handleRestartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X'; 
    gameActive = true;
    statusDisplay.textContent = `Player Guest's turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('player-x', 'player-o');
    });
}

// 5b. Maze Game Logic (FIXED: Random Maze Generation)
let mazeCanvas, mazeCtx, mazeSize = 21, cellSize; // Using odd number size for better generation
let maze, playerX, playerY, finishX, finishY;

function createMaze(size) {
    // Initialize grid with walls (1)
    let grid = Array(size).fill(0).map(() => Array(size).fill(1));
    
    // Start DFS from a random cell (must be odd coordinates)
    let stack = [[1, 1]];
    grid[1][1] = 0; // Mark as path

    while (stack.length > 0) {
        let [x, y] = stack[stack.length - 1];
        let neighbors = [];

        // Define neighbors (2 steps away, skipping wall cell)
        [[0, -2], [0, 2], [-2, 0], [2, 0]].forEach(([dx, dy]) => {
            let nx = x + dx;
            let ny = y + dy;

            if (nx > 0 && nx < size - 1 && ny > 0 && ny < size - 1 && grid[ny][nx] === 1) {
                neighbors.push([nx, ny, x + dx / 2, y + dy / 2]); // [nx, ny, wallX, wallY]
            }
        });

        if (neighbors.length > 0) {
            // Pick a random unvisited neighbor
            let [nx, ny, wallX, wallY] = neighbors[Math.floor(Math.random() * neighbors.length)];
            
            grid[ny][nx] = 0; // Carve path to neighbor
            grid[wallY][wallX] = 0; // Carve the wall between current and neighbor
            stack.push([nx, ny]);
        } else {
            stack.pop(); // Dead end, backtrack
        }
    }
    
    // Ensure start (top-left) and end (bottom-right) are open and path cells
    grid[1][1] = 0; 
    grid[size - 2][size - 2] = 0;
    
    return grid;
}

function drawMaze() {
    if (!mazeCtx || !maze) return;
    mazeCtx.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height);

    for (let y = 0; y < mazeSize; y++) {
        for (let x = 0; x < mazeSize; x++) {
            mazeCtx.fillStyle = maze[y][x] === 1 ? '#444' : '#1a1a1a'; 
            mazeCtx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
    // Draw Finish (Red Square)
    mazeCtx.fillStyle = '#ff5555'; 
    mazeCtx.fillRect(finishX * cellSize + 2, finishY * cellSize + 2, cellSize - 4, cellSize - 4);
    
    // Draw Player (Blue Circle)
    mazeCtx.fillStyle = '#00aaff'; 
    mazeCtx.beginPath();
    mazeCtx.arc(playerX * cellSize + cellSize / 2, playerY * cellSize + cellSize / 2, cellSize / 3, 0, Math.PI * 2);
    mazeCtx.fill();
}

function handleMazeMovement(e) {
    if (document.getElementById('maze-game') && document.getElementById('maze-game').classList.contains('active') === false) return;

    let newX = playerX;
    let newY = playerY;

    switch (e.key) {
        case 'ArrowUp': newY--; e.preventDefault(); break;
        case 'ArrowDown': newY++; e.preventDefault(); break;
        case 'ArrowLeft': newX--; e.preventDefault(); break;
        case 'ArrowRight': newX++; e.preventDefault(); break;
        default: return;
    }

    // Boundary check and wall check (maze[newY][newX] === 0)
    if (newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize && maze[newY][newX] === 0) {
        playerX = newX;
        playerY = newY;
        drawMaze();

        if (playerX === finishX && playerY === finishY) { 
            alert('Congratulations! You solved the Maze!');
            // Start a new, harder maze
            initMazeGame(); 
        }
    }
}

function initMazeGame() {
    mazeCanvas = document.getElementById('maze-canvas');
    if (!mazeCanvas) return; 
    
    mazeCtx = mazeCanvas.getContext('2d');
    mazeCanvas.width = 450;
    mazeCanvas.height = 450;
    cellSize = mazeCanvas.width / mazeSize;
    
    // Generate a new random maze
    maze = createMaze(mazeSize);
    
    // Set start and finish points (must be open path cells)
    playerX = 1; 
    playerY = 1;
    finishX = mazeSize - 2; 
    finishY = mazeSize - 2;
    
    document.removeEventListener("keydown", handleMazeMovement, false);
    document.addEventListener("keydown", handleMazeMovement, false);

    drawMaze();
}


// 5c. Brick Breaker Game Logic (Working)
let brickCanvas, brickCtx, paddle, ball, brickStatusDisplay, bricks, score, lives;
let rightPressed = false;
let leftPressed = false;
let brickRowCount = 5;
let brickColumnCount = 8;
let brickWidth = 50;
let brickHeight = 15;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

const colorPalette = ['#ff5555', '#ffaa55', '#ffff55', '#55ff55', '#55aaff']; 

function initBrickBreaker() {
    brickCanvas = document.getElementById("brick-canvas");
    if (!brickCanvas) return;
    brickCtx = brickCanvas.getContext("2d");
    brickStatusDisplay = document.getElementById('brick-game-status');
    
    brickCanvas.width = 500;
    brickCanvas.height = 400;

    paddle = { height: 10, width: 75, x: (brickCanvas.width - 75) / 2 };
    ball = { radius: 5, x: brickCanvas.width / 2, y: brickCanvas.height - 30, dx: 2, dy: -2 };
    score = 0;
    lives = 3;

    document.removeEventListener("keydown", handleBrickKeys, false);
    document.removeEventListener("keyup", handleBrickKeys, false);
    document.addEventListener("keydown", handleBrickKeys, false);
    document.addEventListener("keyup", handleBrickKeys, false);

    bricks = [];
    for(let c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(let r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1, color: colorPalette[r % colorPalette.length] };
        }
    }

    if (gameFrameRequest) cancelAnimationFrame(gameFrameRequest);
    drawBrickBreaker();
}

function handleBrickKeys(e) {
    if (document.getElementById('brick-breaker') && document.getElementById('brick-breaker').classList.contains('active') === false) return;
    
    if(e.type === "keydown") {
        if(e.key === "Right" || e.key === "ArrowRight") { rightPressed = true; e.preventDefault();}
        else if(e.key === "Left" || e.key === "ArrowLeft") { leftPressed = true; e.preventDefault();}
    } else if(e.type === "keyup") {
        if(e.key === "Right" || e.key === "ArrowRight") { rightPressed = false; }
        else if(e.key === "Left" || e.key === "ArrowLeft") { leftPressed = false; }
    }
}

function collisionDetection() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            const b = bricks[c][r];
            if(b.status === 1) {
                if(ball.x > b.x && ball.x < b.x + brickWidth && ball.y > b.y && ball.y < b.y + brickHeight) {
                    ball.dy = -ball.dy;
                    b.status = 0;
                    score++;
                    if(score === brickRowCount * brickColumnCount) {
                        brickStatusDisplay.textContent = "YOU WIN, CONGRATULATIONS! 🎉";
                        cancelAnimationFrame(gameFrameRequest);
                    }
                }
            }
        }
    }
}

function drawBall() {
    brickCtx.beginPath();
    brickCtx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    brickCtx.fillStyle = "#ff5555";
    brickCtx.shadowColor = "#ff5555";
    brickCtx.shadowBlur = 5;
    brickCtx.fill();
    brickCtx.closePath();
    brickCtx.shadowBlur = 0;
}

function drawPaddle() {
    brickCtx.beginPath();
    brickCtx.rect(paddle.x, brickCanvas.height - paddle.height, paddle.width, paddle.height);
    brickCtx.fillStyle = "#00aaff";
    brickCtx.shadowColor = "#00aaff";
    brickCtx.shadowBlur = 10;
    brickCtx.fill();
    brickCtx.closePath();
    brickCtx.shadowBlur = 0;
}

function drawBricks() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status === 1) {
                const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                brickCtx.beginPath();
                brickCtx.rect(brickX, brickY, brickWidth, brickHeight);
                brickCtx.fillStyle = bricks[c][r].color;
                brickCtx.fill();
                brickCtx.closePath();
                brickCtx.strokeStyle = "#1a1a1a";
                brickCtx.strokeRect(brickX, brickY, brickWidth, brickHeight);
            }
        }
    }
}

function drawScore() {
    brickStatusDisplay.textContent = `Score: ${score} | Lives: ${lives}`;
}

function drawBrickBreaker() {
    if (document.getElementById('brick-breaker') && document.getElementById('brick-breaker').classList.contains('active') === false) {
        cancelAnimationFrame(gameFrameRequest);
        return;
    }

    brickCtx.clearRect(0, 0, brickCanvas.width, brickCanvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();

    // Ball movement
    if(ball.x + ball.dx > brickCanvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
    }
    if(ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    } else if(ball.y + ball.dy > brickCanvas.height - ball.radius) {
        if(ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
            ball.dy = -ball.dy * 1.05; 
            ball.dx += (ball.x - (paddle.x + paddle.width/2)) * 0.1; 
        } else {
            lives--;
            if(!lives) {
                brickStatusDisplay.textContent = `GAME OVER! Final Score: ${score}`;
                cancelAnimationFrame(gameFrameRequest);
                return;
            } else {
                // Reset ball and paddle
                ball.x = brickCanvas.width / 2;
                ball.y = brickCanvas.height - 30;
                ball.dx = 2;
                ball.dy = -2;
                paddle.x = (brickCanvas.width - paddle.width) / 2;
            }
        }
    }

    // Paddle movement
    if(rightPressed && paddle.x < brickCanvas.width - paddle.width) {
        paddle.x += 7;
    } else if(leftPressed && paddle.x > 0) {
        paddle.x -= 7;
    }

    ball.x += ball.dx;
    ball.y += ball.dy;

    gameFrameRequest = requestAnimationFrame(drawBrickBreaker);
}

// 5d. Snake Game Logic (Working)
let snakeCanvas, snakeCtx, snakeScoreDisplay;
let snake, food, dx, dy, scoreSnake;
const TILE_SIZE = 15;
const GAME_SIZE = 300; 

function initSnakeGame() {
    snakeCanvas = document.getElementById('snake-canvas');
    if (!snakeCanvas) return;
    snakeCtx = snakeCanvas.getContext('2d');
    snakeScoreDisplay = document.getElementById('snake-score');
    
    snakeCanvas.width = GAME_SIZE;
    snakeCanvas.height = GAME_SIZE;

    // Reset game state
    snake = [{ x: 150, y: 150 }];
    dx = TILE_SIZE; 
    dy = 0;
    scoreSnake = 0;
    snakeScoreDisplay.textContent = `Score: ${scoreSnake}`;
    createFood();

    document.removeEventListener("keydown", handleSnakeKeys, false);
    document.addEventListener("keydown", handleSnakeKeys, false);

    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(mainGameLoop, 100);
}

function createFood() {
    food = {
        x: Math.floor(Math.random() * (GAME_SIZE / TILE_SIZE)) * TILE_SIZE,
        y: Math.floor(Math.random() * (GAME_SIZE / TILE_SIZE)) * TILE_SIZE
    };
    for (const part of snake) {
        if (part.x === food.x && part.y === food.y) {
            createFood();
            return;
        }
    }
}

function drawSnake() {
    snakeCtx.fillStyle = '#55ff55';
    snake.forEach(part => {
        snakeCtx.fillRect(part.x, part.y, TILE_SIZE, TILE_SIZE);
        snakeCtx.strokeStyle = '#1a1a1a';
        snakeCtx.strokeRect(part.x, part.y, TILE_SIZE, TILE_SIZE);
    });
}

function drawFood() {
    snakeCtx.fillStyle = '#ff5555';
    snakeCtx.fillRect(food.x, food.y, TILE_SIZE, TILE_SIZE);
}

function advanceSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    const hitWall = head.x < 0 || head.x >= GAME_SIZE || head.y < 0 || head.y >= GAME_SIZE;
    const hitSelf = snake.slice(1).some(part => part.x === head.x && part.y === head.y);

    if (hitWall || hitSelf) {
        clearInterval(gameInterval);
        gameInterval = null; 
        snakeScoreDisplay.textContent = `GAME OVER! Final Score: ${scoreSnake} 🎉`;
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        scoreSnake += 10;
        snakeScoreDisplay.textContent = `Score: ${scoreSnake}`;
        createFood();
    } else {
        snake.pop();
    }
}

function handleSnakeKeys(e) {
    if (document.getElementById('snake') && document.getElementById('snake').classList.contains('active') === false) return;

    const changingDirection = (e.key === 'ArrowLeft' && dx === TILE_SIZE) ||
                             (e.key === 'ArrowRight' && dx === -TILE_SIZE) ||
                             (e.key === 'ArrowUp' && dy === TILE_SIZE) ||
                             (e.key === 'ArrowDown' && dy === -TILE_SIZE);
    
    if (changingDirection) return;

    switch (e.key) {
        case 'ArrowLeft': dx = -TILE_SIZE; dy = 0; e.preventDefault(); break;
        case 'ArrowUp': dx = 0; dy = -TILE_SIZE; e.preventDefault(); break;
        case 'ArrowRight': dx = TILE_SIZE; dy = 0; e.preventDefault(); break;
        case 'ArrowDown': dx = 0; dy = TILE_SIZE; e.preventDefault(); break;
    }
}

function mainGameLoop() {
    snakeCtx.fillStyle = '#1a1a1a';
    snakeCtx.fillRect(0, 0, GAME_SIZE, GAME_SIZE);
    advanceSnake();
    drawFood();
    drawSnake();
}

// 5e. Memory Match Game Logic (Working)
let memoryBoard, cards, matchedPairs, timeRemaining, timerInterval;
const cardIcons = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']; 
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function initMemoryGame() {
    memoryBoard = document.getElementById('memory-board');
    if (!memoryBoard) return;
    
    memoryBoard.innerHTML = ''; 
    memoryBoard.classList.remove('win');
    
    matchedPairs = 0;
    timeRemaining = 60;
    
    document.getElementById('memory-status').textContent = `Time: ${timeRemaining}s | Matches: ${matchedPairs}`;
    
    cards = shuffle([...cardIcons, ...cardIcons]).map((icon, index) => ({
        id: index,
        icon: icon,
        isFlipped: false,
        isMatched: false
    }));
    
    renderMemoryBoard();
    
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateTimer() {
    timeRemaining--;
    document.getElementById('memory-status').textContent = `Time: ${timeRemaining}s | Matches: ${matchedPairs}`;
    
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        if (matchedPairs < cards.length / 2) {
            alert("Time's up! Game Over. Try again!");
            // Reset the game board state to show unflipped cards
            initMemoryGame();
        }
    }
}

function renderMemoryBoard() {
    memoryBoard.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('memory-card');
        cardElement.setAttribute('data-id', card.id);
        
        if (card.isFlipped || card.isMatched) {
            cardElement.classList.add('flipped');
            cardElement.textContent = card.icon;
        } else {
            cardElement.textContent = '🎲'; 
        }

        if (card.isMatched) {
            cardElement.classList.add('matched');
        } else {
            cardElement.addEventListener('click', () => flipCard(cardElement, card));
        }
        memoryBoard.appendChild(cardElement);
    });
}

function flipCard(cardElement, card) {
    if (lockBoard || card.isFlipped || card.isMatched) return;

    card.isFlipped = true;
    renderMemoryBoard();
    
    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    lockBoard = true; 

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.icon === secondCard.icon) {
        matchedPairs++;
        cards.find(c => c.id === firstCard.id).isMatched = true;
        cards.find(c => c.id === secondCard.id).isMatched = true;
        
        document.getElementById('memory-status').textContent = `Time: ${timeRemaining}s | Matches: ${matchedPairs}`;
        
        resetTurn();

        if (matchedPairs === cards.length / 2) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("You won! All pairs matched! 🎉");
            memoryBoard.classList.add('win');
        }
    } else {
        setTimeout(() => {
            cards.find(c => c.id === firstCard.id).isFlipped = false;
            cards.find(c => c.id === secondCard.id).isFlipped = false;
            renderMemoryBoard();
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}


// --- 6. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1) || 'home';
    showPage(hash);

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const href = item.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                showPage(href.substring(1));
                history.pushState(null, '', href);
            }
        });
    });

    // Tic-Tac-Toe Listeners 
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    const resetBtn = document.getElementById('reset-game');
    if (resetBtn) resetBtn.addEventListener('click', handleRestartGame);
    
    // Calendar Listeners
    const prevBtn = document.getElementById('prev-month-btn');
    const nextBtn = document.getElementById('next-month-btn');
    const addOccasionBtn = document.getElementById('add-occasion-btn');
    const searchOccasionBtn = document.getElementById('search-occasion-btn'); // New search button

    if (prevBtn) prevBtn.addEventListener('click', () => changeMonth(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeMonth(1));
    if (addOccasionBtn) addOccasionBtn.addEventListener('click', addManualOccasion);
    if (searchOccasionBtn) searchOccasionBtn.addEventListener('click', searchOccasions); // New listener for search

});

// Make functions globally accessible for HTML onclick events
window.showPage = showPage;
window.openArticleModal = openArticleModal;
window.openFormulaModal = openFormulaModal;
window.closeModal = closeModal;
window.closeFormulaModal = closeFormulaModal;
window.openPageModal = openPageModal;
window.showGame = showGame;
window.openOccasionModal = openOccasionModal;