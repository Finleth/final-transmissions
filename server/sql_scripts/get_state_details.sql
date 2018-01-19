DELIMITER $$


DROP PROCEDURE IF EXISTS `getUserStateDetails`
    $$
CREATE PROCEDURE `getUserStateDetails` (
    IN `userId` INT,
    IN `storyId` INT
  )  READS SQL DATA

    BEGIN
        IF NOT EXISTS (SELECT state_id FROM user_stories WHERE id = userId AND story_id = storyId)
        THEN INSERT INTO user_stories (`id`, `story_id`)	
        VALUES (userId, storyId)
        ;    
        END IF ;
        
        SELECT ar.marker, l.latitude AS lat, l.longitude AS lon, l.outer_threshold, l.inner_threshold, sa.action, us.state_id
        FROM user_stories AS us

        JOIN location AS l
        ON l.state_id = us.state_id
        JOIN augmented_reality AS ar
        ON ar.state_id = us.state_id
        JOIN state_actions AS sa
        ON sa.state_id = us.state_id

        WHERE us.id = userId AND us.story_id = storyId
        ;
            
        SELECT  outer_audio_url AS outerAudio, inner_audio_url AS innerAudio, completed_audio_url AS completeAudio
        FROM user_stories AS us
        JOIN audio AS a
        ON a.state_id = us.state_id
        WHERE us.id = userId AND us.story_id = storyId
        ;

    END $$

DELIMITER ;