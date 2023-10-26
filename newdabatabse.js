    // Seed the frontend table
    await pool.query(`
      INSERT INTO frontend (title, description, link, imglink, category)
      VALUES
        ('CSS', 'Learn CSS Grid - A 13 Minute Deep Dive', 'https://youtu.be/EiNiSFIPIQE?si=snHGlSNCbFH_ugdH', 'https://i.ytimg.com/vi/EiNiSFIPIQE/hqdefault.jpg', 'Martina'),
        ('CSS', 'Learn CSS Positioning Quickly With A Real World Example', 'https://youtu.be/MxEtxo_AaZ4?si=JjoJixNuSRi9WoCw', 'https://i.ytimg.com/vi/MxEtxo_AaZ4/hqdefault.jpg', 'Martina'),
        ('CSS', 'Learn CSS Position In 9 Minutes', 'https://youtu.be/jx5jmI0UlXU?si=hDX-wvfnsBNE6kiX', 'https://i.ytimg.com/vi/jx5jmI0UlXU/hqdefault.jpg', 'Martina'),
        ('CSS', 'Learn Flexbox in 15 Minutes', 'https://youtu.be/fYq5PXgSsbE?si=QncpKLnJWjkfooIj', 'https://i.ytimg.com/vi/fYq5PXgSsbE/hqdefault.jpg', 'Martina'),
        ('JavaScript', 'Learn JavaScript Event Listeners In 18 Minutes', 'https://youtu.be/XF1_MlZ5l6M?si=HzHOZBpzBs4XDesr', 'https://i.ytimg.com/vi/XF1_MlZ5l6M/sddefault.jpg', 'Martina'),
        ('JavaScript', 'How To Make Your Own JavaScript Events', 'https://youtu.be/DzZXRvk3EGg?si=o4qMo9wxiKa2klhT', 'https://i.ytimg.com/vi/XF1_MlZ5l6M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC3O0g8wK51hmlyp8dnoPEKHgVy8A', 'Martina'),
        ('JavaScript', 'Learn Pointer Events In 15 Minutes', 'https://youtu.be/MhUCYR9Tb9c?si=7PCDEysTHWK7an_B', 'https://i.ytimg.com/vi/MhUCYR9Tb9c/hqdefault.jpg', 'Martina'),
        ('JavaScript', 'Learn JavaScript DOM Traversal In 15 Minutes', 'https://youtu.be/v7rSSy8CaYE?si=1ycToe-WB5UeBhMF', 'https://i.ytimg.com/vi/v7rSSy8CaYE/sddefault.jpg', 'Martina'),
        ('HTMl & CSS', 'Learn HTML5 and CSS3 For Beginners - Crash Course', 'https://youtu.be/vQWlgd7hV4A?si=S8B_1W-DEwlww5lX', 'https://i.ytimg.com/vi/FZnQAUd9TQY/sddefault.jpg', 'Martina')
    `);

    // Seed the backend table
    await pool.query(`
        INSERT INTO backend (title, description, link, imglink, category)
        VALUES
        ('JavaScript', 'Learn Fetch API In 6 Minutes', 'https://youtu.be/cuEtnrL9-H0?si=Rp-W_qbDP419SaVb', 'https://i.ytimg.com/vi/cuEtnrL9-H0/maxresdefault.jpg', 'Martina'),
        ('JavaScript', 'JavaScript Promises In 10 Minutes', 'https://youtu.be/DHvZLI7Db8E?si=2AHgcipfzCzHJrK9', 'https://i.ytimg.com/vi/DHvZLI7Db8E/maxresdefault.jpg', 'Martina'),
        ('JavaScript', 'Learn JSON in 10 Minutes', 'https://youtu.be/iiADhChRriM?si=I6jTli1nFMkoTjhX', 'https://i.ytimg.com/vi/s6OIOL9OMYA/maxresdefault.jpg', 'Martina'),
        ('JavaScript', 'Learn SQL In 60 Minutes', 'https://youtu.be/p3qvj9hO_Bo?si=tfkqcaKO6cJxMYGB', 'https://blog.logrocket.com/wp-content/uploads/2022/01/build-rest-api-node-express-mysql.png', 'Martina'),
        ('Python', 'Python As Fast as Possible - Learn Python in ~75 Minutes', 'https://youtu.be/VchuKL44s6E?si=i_9AK4RVRlEii45O', 'https://i.ytimg.com/vi/VchuKL44s6E/hqdefault.jpg', 'Martina'),
        ('JavaScript', '8 Must Know JavaScript Array Methods', 'https://youtu.be/R8rmfD9Y5-c?si=pdt7kCPBn_FF5E8E', 'https://miro.medium.com/v2/resize:fit:850/1*u3B4WOHzBXlVvy9pe1pdxg.jpeg', 'Martina'),
        ('JavaScript', 'Why Is Array/Object Destructuring So Useful And How To Use It', 'https://youtu.be/NIq3qLaHCIs?si=-0D2V0acPIPCVXVM', 'https://miro.medium.com/v2/resize:fit:744/1*Z7_fiwo4Bwqdjw8VsHP5pg.png', 'Martina'),
        ('JavaScript', 'JavaScript Testing Introduction Tutorial - Unit Tests, Integration Tests & e2e Tests', 'https://youtu.be/r9HdJ8P6GQI?si=-ZYT9Xq9gm7KUcJ1', 'https://miro.medium.com/v2/resize:fit:996/1*lqWygfNJqWQ4VCyjecQ6Eg.png', 'Susan'),
        ('JavaScript', 'CRUD operations in JavaScript using LocalStorage | CRUD operations in HTML CSS JavaScript (easy way)', 'https://youtu.be/gSdFqxnWBMM?si=yS1Ell-pA_VtSsuc', 'https://i.ytimg.com/vi/La5cL2jNoVw/sddefault.jpg', 'Martina'),
        ('JavaScript', 'NEW Way To Create Variables In JavaScript', 'https://youtu.be/d6a8RymS1zI?si=-APpE3rkInIwlFXu', 'https://www.wikihow.com/images/thumb/7/7e/Declare-a-Variable-in-Javascript-Step-2.jpg/v4-460px-Declare-a-Variable-in-Javascript-Step-2.jpg.webp', 'Martina')
      `);

    // Seed the funstuff table
    await pool.query(`
    INSERT INTO funstuff (title, description, link, imglink, category)
    VALUES
    ('MY FAVOURITE STUDY TUNES', 'Deep Focus Music To Improve Concentration - 12 Hours of Ambient Study Music to Concentrate #601', 'https://www.youtube.com/live/Djz6sfWGmgM?si=YDLvKqOksLBX_ZY5', 'https://e.snmc.io/i/300/s/fe53e7917decee9cf2b2faf195e72bc5/8431694', 'Jasim'),
    ('Welcome to CSSBattle', 'Cascading Style Sheets Battle: Where Pixels and Pizzazz Collide!', 'https://cssbattle.dev/', 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2Ff4MfHUyh.jpg', 'Jasim'),
    ('Joke of the day', 'Get your daily jokes', 'https://www.laughfactory.com/jokes', 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FR3NsSPkh.jpg', 'Jasim'),
    ('Comedy Radio Stations from United Kingdom', 'Radio Rascals: Where Laughter Takes the Airwaves!', 'https://mytuner-radio.com/radio/country/united-kingdom/genre/comedy-stations', 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2FRCnkT2Hh.jpg', 'Jasim')
  `);

    // Seed the uxdesign table
    await pool.query(`
      INSERT INTO uxdesign (title, description, link, imglink, category)
      VALUES
      ('Figma', 'Figma Tutorial: A Crash Course for Beginners', 'https://www.youtube.com/watch?v=IOVFRMuPeVQ&t=4125s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3RX9EOleUkVvpzT4Vgj1EgELCZfw72dxDQ&usqp=CAU', 'Susan'),
      ('Product', 'Marty Cagan - The Nature of Product', 'https://youtu.be/T3VRz18ntjQ?si=6wyd71FPhWh1vFMq', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXosVqBmAOxUrSnvU-6x4DZniR5DPg2Py3g&usqp=CAU', 'Susan'),
      ('Figma', 'Introducing Figma: A Beginners Tutorial (2023 UI UX Design)', 'https://youtu.be/JGLfyTDgfDc?si=0jmMjWOTcRYMZDfx', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-p4pj3sG5jPDPXxL5cvbT9fM_B6vtv2oow&usqp=CAU', 'Susan'),
      ('User research', 'https://www.youtube.com/watch?v=bAARmsv1tms', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2DYI0z1p-L5REOZx2Asp1Gv298TapfHvqQ&usqp=CAU', 'Susan'),
      ('Wireframe', 'How To Create Your First Wireframe (A UX Tutorial)', 'https://youtu.be/qpH7-KFWZRI?si=B-2M-vnvqJHNQGNL', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkB1rertiIxa9kkL80ioF17L5xAO9lWRTng&usqp=CAU', 'Susan'),
      ('Wireframe', 'How To Make An Effective Customer Journey Map In 1 Hour (FREE Templates)', 'https://youtu.be/68ZXwI5L4kY?si=PlWEXIaGdOBKeZXs', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MKC18oS9oWX56Vw5rl9e1eWAkRwokQ4QmQ&usqp=CAU', 'Susan')
    `);
