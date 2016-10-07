    <html>
        <head>
        <title>
                my php
                    </title>
        </head>>

        <body>
            <?php
                
            if($_POST)
            {
                $user=$_POST["name"];
                $brand=$_POST["brand"];
                
                if(!empty($user) && !empty($brand))
                {
                    echo "thank you $user for chossing $brand ";
                }
            }
            ?>
            
            <form method="post" action="myphp.php" >
                  
                  <label>username</label>
                  <input type="text" name="name" id="name">
                  <p> please vote for your fav mobile brand</p>

                  <label><input type="radio" name="brand" id="nokia" value="nokia">nokia</label>
                  <label><input type="radio" name="brand" id="samsung" value="samsung">samsung</label>
                  <label><input type="radio" name="brand" id="htc" value="htc">htc</label>
                  <label><input type="radio" name="brand" id="mi" value="mi">mi</label>
                  <input type="submit" name="submit" id="submit">
                  
            </form>
        </body>
    </html>








